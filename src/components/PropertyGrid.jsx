import PropertyCard from "./PropertyCard";
function PropertyGrid({ properties, favorites, onToggleFavorite, }) {
    return(
        <section className="property-grid">
            {properties.map((property) => (<PropertyCard key={property.id} property={property}
            isFavorite={favorites.includes(property.id)}
        onToggleFavorite={onToggleFavorite} />))}
        </section>
    );
}
export default PropertyGrid;