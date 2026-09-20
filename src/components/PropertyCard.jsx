import "./PropertyCard.css";
import { Link } from "react-router-dom";

function PropertyCard({ property }) {
    return(
        <article className="property-card">
            <img src={property.images[0]} alt={property.title} />
            <div className="property-card-content">
               <h3>{property.title}</h3>
               <p className="property-location">{property.location}</p>
               <p className="property-price">#{property.price.toLocaleString()} /month</p>
               <p className="property-details">{property.bedrooms} Bedrooms . {property.bathrooms} Bathrooms</p>
               <p className="property-details">{property.size} sq ft</p>
               <p className="property-type">{property.type}</p>
               {property.furnished && <p className="property-furnished">Furnished</p>}
               <Link to={`/properties/${property.id}`}>View Property</Link>
            </div>
        </article>
    )
}
export default PropertyCard;