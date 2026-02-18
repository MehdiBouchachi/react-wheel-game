export function generateSpinRotation() {
  const extraSpins = Math.floor(Math.random() * 3) + 5;
  const randomAngle = Math.random() * 2 * Math.PI;

  return extraSpins * 2 * Math.PI + randomAngle;
}

export function getWinnerIndex(finalAngle, optionsLength) {
  const sliceAngle = (2 * Math.PI) / optionsLength;

  let normalized = finalAngle % (2 * Math.PI);
  if (normalized < 0) normalized += 2 * Math.PI;

  const pointerAngle = (3 * Math.PI) / 2;

  const adjusted = (pointerAngle - normalized + 2 * Math.PI) % (2 * Math.PI);

  return Math.floor(adjusted / sliceAngle);
}
