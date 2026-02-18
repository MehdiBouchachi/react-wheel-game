import { useState } from "react";
import Hero from "../pages/Hero";
import Features from "../pages/Features";
import Wheel from "../pages/Wheel";
import ThemeToggle from "./ThemeToggle";

function AppLayout() {
  const [options, setOptions] = useState([]);

  return (
    <>
      <Hero />
      <Features onCreate={setOptions} />
      {options.length > 0 && <Wheel options={options} />}
      <ThemeToggle />
    </>
  );
}

export default AppLayout;
