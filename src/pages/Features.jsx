import Section from "../components/Section";
import FeaturesCard from "../components/FeaturesCard";

export default function Features({ onCreate }) {
  return (
    <Section className="features" sectionId="features">
      <h2>Create Your Own Wheel</h2>

      <FeaturesCard onCreate={onCreate} />
    </Section>
  );
}
