import { useRef, useEffect } from "react";

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

export default function WheelCanvas({ options, angle }) {
  const canvasRef = useRef(null);
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

  return <canvas ref={canvasRef} width={500} height={500} />;
}
