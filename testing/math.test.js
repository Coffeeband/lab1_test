import { abs, floor, ceil, log2, exp, sin } from './math.js';

describe('Math functions', () => {
  test('log2', () => {
    expect(log2(8)).toBe(3);
  });

  test('abs', async () => {
    expect(abs(-5)).toBe(5);
  });

  test('log2', async () => {
    expect(log2(8)).toBe(3);
    expect(log2(1024)).toBe(10);
  });

  test('exp', async () => {
    expect(exp(0)).toBe(1);
  });

  test('sin', async () => {
    expect(sin(0)).toBe(0);
  });
});