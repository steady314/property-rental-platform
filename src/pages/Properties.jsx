import PropertyCard from "../components/PropertyCard";
import properties from "../data/properties";
import "./Properties.css"
import { useFavorites } from "../context/FavoritesContext";

function Properties() {
    const { favorites, toggleFavorite } = useFavorites();
    return(
        <main className="properties-page">
            <section className="properties-header">
                <h1>Available Properties</h1>
                <p>Find a property that mataches your lifestyle and budget.</p>
            </section>
            <section className="property-grid">
                {properties.map((property) => (<PropertyCard key={property.id} property={property} 
                isFavorite={favorites.includes(property.id)} onToggleFavorite={toggleFavorite}
                />))}
            </section>
        </main>
    );
}
export default Properties;