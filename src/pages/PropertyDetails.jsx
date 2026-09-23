import { Link, useParams } from "react-router-dom";
import properties from "../data/properties";
import { useFavorites } from "../context/FavoritesContext";
import "./PropertyDetails.css";
import PropertyInfo from "../components/PropertyInfo";
import PropertyAmenities from "../components/PropertyAmenities";
import PropertyHeader from "../components/PropertyHeader";

function PropertyDetails() {
    const { id } = useParams();
    const { favorites, toggleFavorite } = useFavorites();
    const property = properties.find((property) => property.id === Number(id));
    if (!property) {
        return(
            <main>
                <h1>Property not found.</h1>
                <p>The property you are looking for doesn't exist.</p>
                <Link to="/properties">Browse Properties.</Link>
            </main>
        );
    }
    const isFavorite = favorites.includes(property.id);

    return(
        <main className="property-details-page">
            {<PropertyHeader property={property} />}
            <section className="property-gallery"> 
                {property.images.map((image, index) => (<img key={image} src={image} alt={ `${property.title} ${index + 1}` } />))}
            </section>
            <div className="property-details-layout">
                <div className="property-details-main">
                  <PropertyInfo property={property} />
                  <PropertyAmenities amenities={property.amenities} />
                </div>
                <aside className="property-action-card">
                    <p className="action-price">#{property.price.toLocaleString()}<span> / month</span> </p>
                    <button className="favorite-detail-button" onClick={() => toggleFavorite(property.id)}>{isFavorite ? "❤ Saved" : "🤍 Save Property"}</button>
                    <button className="viewing-button">Request a Viewing</button>
                </aside>
            </div>
        </main>
    );
}
export default PropertyDetails;