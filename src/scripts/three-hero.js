import * as THREE from 'three';

export function initHeroThree() {
  const container = document.getElementById('canvas-container');
  if (!container) return;

  // Clean any previous canvas if hot-reloading
  container.innerHTML = '';

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0xffffff, 0.002);

  let width = container.clientWidth;
  let height = container.clientHeight;

  const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  camera.position.z = 30;

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0xffffff, 0); // Transparent to blend seamlessly
  container.appendChild(renderer.domElement);

  // 1. Torus Knot with refined Bahia Steel / Slate wireframe
  const geometry = new THREE.TorusKnotGeometry(9, 2.5, 120, 16);
  const material = new THREE.MeshPhysicalMaterial({
    color: 0x5992A6, // Bahia Teal / Slate
    emissive: 0x0D1527,
    metalness: 0.5,
    roughness: 0.2,
    wireframe: true,
    transparent: true,
    opacity: 0.28
  });
  const torusKnot = new THREE.Mesh(geometry, material);
  scene.add(torusKnot);

  // 2. Dual-Color Particles: Bahia Cyan & Bahia Red sparks
  const sparkCount = 120;
  const sparkGeo = new THREE.CircleGeometry(0.18, 5);

  // Instanced Cyan sparks (#008ABE)
  const sparkMatCyan = new THREE.MeshBasicMaterial({
    color: 0x008ABE,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.95,
    depthTest: false
  });
  const sparksCyan = new THREE.InstancedMesh(sparkGeo, sparkMatCyan, Math.floor(sparkCount * 0.65));
  torusKnot.add(sparksCyan);

  // Instanced Bahia Red sparks (#FF0337)
  const sparkMatRed = new THREE.MeshBasicMaterial({
    color: 0xFF0337,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.95,
    depthTest: false
  });
  const sparksRed = new THREE.InstancedMesh(sparkGeo, sparkMatRed, Math.floor(sparkCount * 0.35));
  torusKnot.add(sparksRed);

  // Spark Data
  const radialSegments = 16;
  const tubularSegments = 120;
  const stride = radialSegments + 1;
  const posAttribute = geometry.attributes.position;
  const dummy = new THREE.Object3D();
  const v1 = new THREE.Vector3();
  const v2 = new THREE.Vector3();

  const cyanCount = Math.floor(sparkCount * 0.65);
  const redCount = Math.floor(sparkCount * 0.35);

  const sparkDataCyan = Array.from({ length: cyanCount }, () => ({
    speed: 0.001 + Math.random() * 0.0025,
    progress: Math.random(),
    pathIndex: Math.floor(Math.random() * radialSegments)
  }));

  const sparkDataRed = Array.from({ length: redCount }, () => ({
    speed: 0.0012 + Math.random() * 0.0028,
    progress: Math.random(),
    pathIndex: Math.floor(Math.random() * radialSegments)
  }));

  function updateSparks(mesh, dataList) {
    dataList.forEach((spark, i) => {
      spark.progress += spark.speed;
      if (spark.progress >= 1) spark.progress = 0;

      const exactInd = spark.progress * tubularSegments;
      const u = Math.floor(exactInd);
      const nextU = (u + 1) % tubularSegments;
      const v = spark.pathIndex;

      const idx1 = (u * stride + v) * 3;
      const idx2 = (nextU * stride + v) * 3;

      v1.fromArray(posAttribute.array, idx1);
      v2.fromArray(posAttribute.array, idx2);
      v1.lerp(v2, exactInd - u);

      dummy.position.copy(v1);
      dummy.lookAt(v2);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    });
    mesh.instanceMatrix.needsUpdate = true;
  }

  // 3. Lighting matching Bahia brand
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
  scene.add(ambientLight);

  // Bahia Cyan key light
  const pLight1 = new THREE.PointLight(0x008ABE, 1.2, 60);
  pLight1.position.set(12, 12, 15);
  scene.add(pLight1);

  // Bahia Red rim light
  const pLight2 = new THREE.PointLight(0xFF0337, 1.0, 50);
  pLight2.position.set(-12, -10, 12);
  scene.add(pLight2);

  // 4. Mouse movement tracking
  let mouseX = 0, mouseY = 0;
  let targetX = 0, targetY = 0;
  const windowHalfX = window.innerWidth / 2;
  const windowHalfY = window.innerHeight / 2;

  const onMouseMove = (e) => {
    mouseX = (e.clientX - windowHalfX) * 0.0004;
    mouseY = (e.clientY - windowHalfY) * 0.0004;
  };
  window.addEventListener('mousemove', onMouseMove);

  // 5. Animation loop
  let animId;
  const animate = () => {
    animId = requestAnimationFrame(animate);

    targetX = mouseX * 0.5;
    targetY = mouseY * 0.5;

    torusKnot.rotation.y += 0.04 * (targetX - torusKnot.rotation.y) + 0.0018;
    torusKnot.rotation.x += 0.04 * (targetY - torusKnot.rotation.x) + 0.0012;

    updateSparks(sparksCyan, sparkDataCyan);
    updateSparks(sparksRed, sparkDataRed);

    renderer.render(scene, camera);
  };
  animate();

  // Resize handler
  const onResize = () => {
    if (!container) return;
    width = container.clientWidth;
    height = container.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  };
  window.addEventListener('resize', onResize);

  return () => {
    cancelAnimationFrame(animId);
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('resize', onResize);
    renderer.dispose();
  };
}
