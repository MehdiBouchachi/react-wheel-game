import { useRef, useEffect, useState } from "react";
import Button from "../components/Button";

const colors = [
  "#ef4444",
  "#f97316",
  "#eab308",
  "#84cc16",
  "#22c55e",
  "#14b8a6",
  "#3b82f6",
  "#a855f7",
];

export default function Wheel({ options }) {
  const canvasRef = useRef(null);
  const [angle, setAngle] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [winner, setWinner] = useState("");

  function drawWheel() {
    const canvas = canvasRef.current;
    if (!canvas || options.length === 0) return;

    const ctx = canvas.getContext("2d");
    const radius = canvas.width / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const sliceAngle = (2 * Math.PI) / options.length;

    ctx.save();
    ctx.translate(radius, radius);
    ctx.rotate(angle);

    options.forEach((option, index) => {
      const startAngle = index * sliceAngle;
      const endAngle = startAngle + sliceAngle;

      ctx.fillStyle = colors[index % colors.length];

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, radius, startAngle, endAngle);
      ctx.closePath();
      ctx.fill();

      ctx.save();
      ctx.rotate(startAngle + sliceAngle / 2);
      ctx.textAlign = "right";
      ctx.fillStyle = "#fff";
      ctx.font = "bold 16px Plus Jakarta Sans";
      ctx.fillText(option, radius - 20, 5);
      ctx.restore();
    });

    ctx.restore();
  }

  useEffect(() => {
    drawWheel();
  }, [options, angle]);

  function spinWheel() {
    if (spinning || options.length === 0) return;

    setSpinning(true);
    setWinner("");

    const spinTime = 4000;
    // eslint-disable-next-line react-hooks/purity
    const start = performance.now();

    // eslint-disable-next-line react-hooks/purity
    const extraSpins = Math.floor(Math.random() * 3) + 5;

    // eslint-disable-next-line react-hooks/purity
    const randomAngle = Math.random() * 2 * Math.PI;

    const totalRotation = extraSpins * 2 * Math.PI + randomAngle;

    const startAngle = angle;

    function animate(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / spinTime, 1);

      const easeOut = 1 - Math.pow(1 - progress, 3);

      const newAngle = startAngle + totalRotation * easeOut;

      setAngle(newAngle);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        finish(newAngle);
        setSpinning(false);
      }
    }

    requestAnimationFrame(animate);
  }

  function finish(finalAngle) {
    const sliceAngle = (2 * Math.PI) / options.length;

    let normalized = finalAngle % (2 * Math.PI);

    if (normalized < 0) normalized += 2 * Math.PI;

    const pointerAngle = (3 * Math.PI) / 2;

    const adjusted = (pointerAngle - normalized + 2 * Math.PI) % (2 * Math.PI);

    const index = Math.floor(adjusted / sliceAngle);

    setWinner(options[index]);
  }

  return (
    <section className="wheel-section active" id="wheelSection">
      <div className="wheel-container">
        <div className="pointer"></div>
        <canvas ref={canvasRef} width={500} height={500} />
      </div>

      <Button variation="btn-secondary" onClick={spinWheel}>
        Spin the Wheel
      </Button>

      {winner && <div className="result">Winner: {winner}</div>}
    </section>
  );
}
