import properties from "../data/properties";
import "./Properties.css"
import { useFavorites } from "../context/FavoritesContext";
import PropertyGrid from "../components/PropertyGrid";

function Properties() {
    const { favorites, toggleFavorite } = useFavorites();
    return(
        <main className="properties-page">
            <section className="properties-header">
                <h1>Available Properties</h1>
                <p>Find a property that mataches your lifestyle and budget.</p>
            </section>
            <PropertyGrid properties={properties} favorites={favorites} onToggleFavorite={toggleFavorite}/>
        </main>
    );
}
export default Properties;