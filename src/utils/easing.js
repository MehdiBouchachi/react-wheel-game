export function easeOutCubic(progress) {
  return 1 - Math.pow(1 - progress, 3);
}
