import {
  Link,
  useNavigate,
} from "react-router-dom";

import { useAuth } from "../context/AuthContext";

import "./PropertyCard.css";

function PropertyCard({
  property,
  isFavorite,
  onToggleFavorite,
}) {
  const { user } = useAuth();

  const navigate = useNavigate();

  const handleFavorite = () => {
    if (!user) {
      navigate("/login");
      return;
    }

    onToggleFavorite(property.id);
  };

  return (
    <article className="property-card">
      <div className="property-image-wrapper">
        <img
          src={property.images[0]}
          alt={property.title}
        />

        {property.furnished && (
          <span className="property-badge">
            Furnished
          </span>
        )}

        <button
          className="favorite-button"
          onClick={handleFavorite}
          aria-label={
            isFavorite
              ? `Remove ${property.title} from favorites`
              : `Add ${property.title} to favorites`
          }
        >
          {isFavorite ? "♥" : "♡"}
        </button>
      </div>

      <div className="property-card-content">
        <p className="property-type">
          {property.type}
        </p>

        <h3>{property.title}</h3>

        <p className="property-location">
          {property.location}
        </p>

        <p className="property-price">
          ${property.price.toLocaleString()}
          <span> / month</span>
        </p>

        <div className="property-details">
          <span>
            {property.bedrooms} Beds
          </span>

          <span>
            {property.bathrooms} Baths
          </span>

          <span>
            {property.size} sq ft
          </span>
        </div>

        <Link
          className="property-button"
          to={`/properties/${property.id}`}
        >
          View Property
        </Link>
      </div>
    </article>
  );
}

export default PropertyCard;