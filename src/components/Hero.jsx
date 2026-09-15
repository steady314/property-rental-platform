import { Link } from "react-router-dom";
function Hero({ title, description}) {
    return(
        <section className="hero">
            <p>Find Your Next Home</p>
            <h1>{title}</h1>
            <p>{description}</p>
            <Link to="/properties">Find a Property</Link>
        </section>
    );
}
export default Hero;