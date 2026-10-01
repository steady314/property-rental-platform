import { useFavorites } from "../context/FavoritesContext";
import PropertyCard from "./PropertyCard";

function PropertyGrid({ properties }) {
    const { favorites, toggleFavorite } = useFavorites();

    return(
        <section className="property-grid">
            {properties.map((property) => (
                <PropertyCard key={property.id} property={property} isFavorite={favorites.includes(property.id)} 
                onToggleFavorite={toggleFavorite} />
            ))}
        </section>
    );
}
export default PropertyGrid;