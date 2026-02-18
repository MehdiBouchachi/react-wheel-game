import { useWheel } from "../hooks/useWheel";
import Button from "./Button";
import WheelCanvas from "./WheelCanvas";
import Winner from "./Winner";

function WheelCard({ options }) {
  const { angle, spinWheel, isSpinning, winner } = useWheel(options);
  return (
    <>
      <div className="wheel-container">
        <div className="pointer" />
        <WheelCanvas options={options} angle={angle} />
      </div>

      <Button
        variation="btn-secondary"
        onClick={spinWheel}
        disabled={isSpinning}
      >
        {isSpinning ? "Spinning..." : "Spin the Wheel"}
      </Button>

      <Winner winner={winner} isSpinning={isSpinning} />
    </>
  );
}

export default WheelCard;
