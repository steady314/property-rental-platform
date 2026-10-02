import PropertyCard from "./PropertyCard";
import properties from "../data/properties";
import { useFavorites } from "../context/FavoritesContext";
import "./FeaturedProperties.css";

function FeaturedProperties() {
  const {
    favorites,
    toggleFavorite,
  } = useFavorites();

  return (
    <section className="featured-properties">
      <div className="featured-header">
        <p className="section-eyebrow">Explore Our Listings</p>

        <h2>Featured Properties</h2>

        <p>
          Explore some of our hand-picked properties available for rent.
        </p>
      </div>

      <div className="featured-grid">
        {properties.slice(0, 3).map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
            isFavorite={favorites.includes(property.id)}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </section>
  );
}

export default FeaturedProperties;