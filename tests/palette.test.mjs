import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const [globalCss, pitchCss] = await Promise.all([
  readFile(new URL('../src/styles/global.css', import.meta.url), 'utf8'),
  readFile(new URL('../src/styles/pitch.css', import.meta.url), 'utf8'),
]);

const canonicalTokens = [
  '--bahia-cyan:#008ABE',
  '--bahia-blue:#1A63AF',
  '--bahia-indigo:#4D4C9D',
  '--bahia-magenta:#FF0347',
  '--bahia-red:#FF0337',
  '--bahia-dark:#0D1527',
];

test('global stylesheet exposes the canonical Bahia palette', () => {
  for (const token of canonicalTokens) {
    assert.ok(globalCss.includes(token), `missing canonical token: ${token}`);
  }
});

test('semantic theme tokens are derived from the canonical palette', () => {
  assert.ok(globalCss.includes('--accent:var(--bahia-cyan)'));
  assert.ok(globalCss.includes('--deep:var(--bahia-dark)'));
  assert.ok(globalCss.includes('--accent-secondary:var(--bahia-indigo)'));
  assert.ok(globalCss.includes('--accent-hot:var(--bahia-magenta)'));
});

test('migration-only yellow palette is removed from global and pitch styles', () => {
  const combined = `${globalCss}\n${pitchCss}`.toLowerCase();
  for (const legacy of ['#f0c94f', '#d8b83f', '#f7dc81', '#e4bd3f']) {
    assert.equal(combined.includes(legacy), false, `legacy color still present: ${legacy}`);
  }
});

test('pitch consumes shared semantic tokens instead of redefining the key palette', () => {
  assert.ok(pitchCss.includes('var(--deep)'));
  assert.ok(pitchCss.includes('var(--accent)'));
  assert.ok(pitchCss.includes('var(--bahia-blue)'));
});
