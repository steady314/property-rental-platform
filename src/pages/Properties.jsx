import PropertyCard from "../components/PropertyCard";
import properties from "../data/properties";
import "./Properties.css"
function Properties() {
    return(
        <main className="properties-page">
            <section className="properties-header">
                <h1>Available Properties</h1>
                <p>Find a property that mataches your lifestyle and budget.</p>
            </section>
            <section className="property-grid">
                {properties.map((property) => (<PropertyCard key={property.id} property={property}/>))}
            </section>
        </main>
    );
}
export default Properties;