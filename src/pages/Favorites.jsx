
import properties from "../data/properties";
import { useFavorites } from "../context/FavoritesContext";
import "./Favorites.css";
import PropertyGrid from "../components/PropertyGrid";

function Favorites() {
    const { favorites, toggleFavorite } = useFavorites();
    const favoriteProperties = properties.filter(
        (property) => favorites.includes(property.id)
    );
    return(
        <main className="favorite-page">
            <section className="favorites-header">
               <h1>Favorites Properties</h1>
               <p>Properties you've saved for later.</p>
            </section>
            {favoriteProperties.length === 0 ? (
                <p className="favorites-empty">You haven't saved any property yet.</p>
            ) : (
                <PropertyGrid properties={favoriteProperties} favorites={favorites} onToggleFavorite={toggleFavorite}/>
               )}
        </main>
    );
}
export default Favorites;