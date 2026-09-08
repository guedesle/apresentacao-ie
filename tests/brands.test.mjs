import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const [header, footer, pitch] = await Promise.all([
  readFile(new URL('../src/components/SiteHeader.astro', import.meta.url), 'utf8'),
  readFile(new URL('../src/components/SiteFooter.astro', import.meta.url), 'utf8'),
  readFile(new URL('../src/layouts/PitchLayout.astro', import.meta.url), 'utf8'),
]);

test('EGBA graphical brand is present in site and pitch headers', () => {
  assert.ok(header.includes('brand-logo-egba'), 'site header must render the EGBA graphical brand');
  assert.ok(pitch.includes('brand-logo-egba'), 'pitch header must render the EGBA graphical brand');
});

test('footer renders the approved institutional sequence', () => {
  const sequence = [
    'Governo do Estado da Bahia',
    'Casa Civil',
    'EGBA',
    'Diário Oficial do Estado da Bahia',
  ];

  let previousIndex = -1;
  for (const label of sequence) {
    const index = footer.indexOf(label);
    assert.ok(index >= 0, `footer is missing institutional brand: ${label}`);
    assert.ok(index > previousIndex, `institutional brand is out of order: ${label}`);
    previousIndex = index;
  }
});

test('government brand uses the canonical local image path', () => {
  assert.ok(footer.includes('/images/bagov.png'));
});

test('institutional strip is explicitly labelled for accessibility', () => {
  assert.ok(footer.includes('aria-label="Marcas institucionais"'));
});
