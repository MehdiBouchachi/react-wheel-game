import Button from "../components/Button";
import Section from "../components/Section";

export default function Hero() {
  return (
    <Section className="hero" sectionId={"hero"}>
      <h1>
        Spin the Wheel.
        <br />
        <span className="accent">Let Fate Decide.</span>
      </h1>

      <p>
        A powerful desktop wheel game that helps you make decisions, run
        giveaways, or just have fun — all with one satisfying spin.
      </p>

      <Button as="a" variation="btn-primary" href="#features">
        Explore Features
      </Button>
    </Section>
  );
}
