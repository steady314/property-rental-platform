import { Link } from "react-router-dom";
import "./Hero.css";

function Hero({ title, description }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-eyebrow">Find Your Next Home</p>

        <h1>{title}</h1>

        <p className="hero-description">
          {description}
        </p>

        <Link className="hero-button" to="/properties">
          Explore Properties
        </Link>
      </div>
    </section>
  );
}

export default Hero;