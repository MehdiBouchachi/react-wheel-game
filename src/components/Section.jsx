function Section({ sectionId, className, children }) {
  return (
    <section id={sectionId} className={className}>
      <div className="container">{children}</div>

      {sectionId === "hero" && <div className="hero-wave"></div>}
    </section>
  );
}

export default Section;
