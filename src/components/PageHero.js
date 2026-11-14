/** Simple centered page header used by inner pages. */
export default function PageHero({ eyebrow, title, children }) {
  return (
    <section className="page-hero">
      <div className="container hero-in">
        {eyebrow && <span className="hero-pill">{eyebrow}</span>}
        <h1>{title}</h1>
        {children && <div className="page-hero-sub">{children}</div>}
      </div>
    </section>
  );
}
