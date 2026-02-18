import WheelCard from "../components/WheelCard";

export default function Wheel({ options }) {
  return (
    <section className="wheel-section active" id="wheelSection">
      <WheelCard options={options} />
    </section>
  );
}
