export const clamp = (v, min = 0, max = 1) => Math.max(min, Math.min(max, v));

// Maps progress p from [a, b] to [0, 1]
export const range = (p, a, b) => clamp((p - a) / (b - a));

export const easeInOut = (t) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
