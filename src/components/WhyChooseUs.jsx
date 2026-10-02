import benefits from "../data/benefits";
import "./WhyChooseUs.css";

function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <div className="why-header">
        <p className="section-eyebrow">Why Property Rental</p>

        <h2>Everything you need to find your next home.</h2>

        <p>
          We make the rental search simple, convenient, and transparent.
        </p>
      </div>

      <div className="benefits-grid">
        {benefits.map((benefit) => (
          <article
            className="benefit-card"
            key={benefit.title}
          >
            <div className="benefit-icon" aria-hidden="true">
              ✓
            </div>

            <h3>{benefit.title}</h3>

            <p>{benefit.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;