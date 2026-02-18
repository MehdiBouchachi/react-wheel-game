import { useState } from "react";
import Button from "./Button";

function FeaturesCard({ onCreate }) {
  const [input, setInput] = useState("");

  function handleCreate() {
    const options = input
      .split(/[\n,]+/)
      .map((opt) => opt.trim())
      .filter(Boolean);

    if (options.length === 0) return;

    onCreate(options);

    document
      .getElementById("wheelSection")
      .scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter one option per line..."
      />

      <Button variation="btn-secondary" onClick={handleCreate}>
        Play Now
      </Button>
    </>
  );
}

export default FeaturesCard;
