import PropertyCard from "../components/PropertyCard";
import properties from "../data/properties";
import { Link } from "react-router-dom";
function Home () {
    return(
        <main>
            <section>
                <p>Find Your next home</p>
                <h1>Find a place you would love to live in.</h1>
                <p>Discover comfortable and afffordable properties in locations that work for you.</p>
                <Link to="/properties">Find a Property</Link>
            </section>
            <section>
                <h2>Featured properties</h2>
                <p>Explore some of our available rental properties.</p>
                <div>
                    {properties.slice(0,3).map((property) => (<PropertyCard key={property.id} property={property} />))}
                </div>
            </section>
            <section>
                <h2>Why Choose Us?</h2>
                <div>
                    <article>
                        <h3>Trusted Properties</h3>
                        <p>Browse properties from trusted listings.</p>
                    </article>
                    <article>
                        <h3>Easy Search</h3>
                        <p>Find properties that matches your needs quickly</p>
                    </article>
                    <article>
                        <h3>Simple Viewing</h3>
                        <p>Request a property viewing when you find the right place.</p>
                    </article>
                </div>
            </section>
        </main>
    );
}
export default Home;