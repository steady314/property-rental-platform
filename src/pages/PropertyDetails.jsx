import {
  Link,
  useParams,
  useNavigate,
} from "react-router-dom";

import properties from "../data/properties";

import { useFavorites } from "../context/FavoritesContext";
import { useAuth } from "../context/AuthContext";

import PropertyHeader from "../components/PropertyHeader";
import PropertyInfo from "../components/PropertyInfo";
import PropertyAmenities from "../components/PropertyAmenities";

import "./PropertyDetails.css";

function PropertyDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  const { user } = useAuth();

  const {
    favorites,
    toggleFavorite,
  } = useFavorites();

  const property = properties.find(
    (property) =>
      property.id === Number(id)
  );

  if (!property) {
    return (
      <main className="property-not-found">
        <h1>Property Not Found</h1>

        <p>
          The property you're looking for
          doesn't exist.
        </p>

        <Link to="/properties">
          Browse Properties
        </Link>
      </main>
    );
  }

  const isFavorite =
    favorites.includes(property.id);

  const handleFavorite = () => {
    if (!user) {
      navigate("/login");
      return;
    }

    toggleFavorite(property.id);
  };

  const handleViewingRequest = () => {
    if (!user) {
      navigate("/login");
      return;
    }

    navigate(
      `/properties/${property.id}/request-viewing`
    );
  };

  return (
    <main className="property-details-page">
      <PropertyHeader
        property={property}
      />

      <section className="property-gallery">
        {property.images.map(
          (image, index) => (
            <img
              key={image}
              src={image}
              alt={`${property.title} - view ${
                index + 1
              }`}
            />
          )
        )}
      </section>

      <div className="property-details-layout">
        <div className="property-details-main">
          <PropertyInfo
            property={property}
          />

          <PropertyAmenities
            amenities={property.amenities}
          />
        </div>

        <aside className="property-action-card">
          <p className="action-price">
            ${property.price.toLocaleString()}

            <span> / month</span>
          </p>

          <button
            className="favorite-detail-button"
            onClick={handleFavorite}
          >
            {isFavorite
              ? "♥ Saved"
              : "♡ Save Property"}
          </button>

          <button
            className="viewing-button"
            onClick={
              handleViewingRequest
            }
          >
            Request a Viewing
          </button>
        </aside>
      </div>
    </main>
  );
}

export default PropertyDetails;