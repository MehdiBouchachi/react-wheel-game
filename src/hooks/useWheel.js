import { useRef, useState } from "react";
import { easeOutCubic } from "../utils/easing";
import { generateSpinRotation, getWinnerIndex } from "../utils/wheelMath";

export function useWheel(options) {
  const [angle, setAngle] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [winner, setWinner] = useState("");

  const startRef = useRef(0);
  const rotationRef = useRef(0);

  function spinWheel() {
    if (isSpinning || options.length === 0) return;

    setIsSpinning(true);
    setWinner("");

    const spinTime = 4000;

    startRef.current = performance.now();
    rotationRef.current = generateSpinRotation();

    const startAngle = angle;

    function animate(now) {
      const elapsed = now - startRef.current;
      const progress = Math.min(elapsed / spinTime, 1);

      const eased = easeOutCubic(progress);
      const newAngle = startAngle + rotationRef.current * eased;

      setAngle(newAngle);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        const index = getWinnerIndex(newAngle, options.length);
        setWinner(options[index]);
        setIsSpinning(false);
      }
    }

    requestAnimationFrame(animate);
  }

  return {
    angle,
    spinWheel,
    isSpinning,
    winner,
  };
}
