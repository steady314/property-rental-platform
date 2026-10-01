import properties from "../data/properties";
import "./Properties.css"
import PropertyGrid from "../components/PropertyGrid";
import { useState } from "react";

function Properties() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredProperties = properties.filter(
        (property) => property.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return(
        <main className="properties-page">
            <section className="properties-header">
                <h1>Available Properties</h1>
                <p>Find a property that matches your lifestyle and budget.</p>
            </section>
            <section className="property-search">
                <label htmlFor="location-search">Search by location.</label>
                <input id="location-search" type="search" placeholder="e.g Wuse, Maitama, Gwarimpa" value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)} />
            </section>
            <PropertyGrid properties={filteredProperties} />
        </main>
    );
}
export default Properties;