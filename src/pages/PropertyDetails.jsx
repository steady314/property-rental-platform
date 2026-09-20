import { useParams } from "react-router-dom";
import properties from "../data/properties";
import "./PropertyDetails.css";
import PropertyInfo from "../components/PropertyInfo";
import PropertyAmenities from "../components/PropertyAmenities";
import PropertyHeader from "../components/PropertyHeader";

function PropertyDetails() {
    const { id } = useParams();
    const property = properties.find((property) => property.id === Number(id));
    if (!property) {
        return(
            <main>
                <h1>Property not found.</h1>
                <p>The property you are looking for doesn't exist.</p>
            </main>
        );
    }
    return(
        <main className="property-details-page">
            {<PropertyHeader property={property} />}
            <section className="property-gallery"> 
                {property.images.map((image, index) => (<img key={image} src={image} alt={ `${property.title} ${index + 1}` } />))}
            </section>
            {<PropertyInfo property={property} />}
            {<PropertyAmenities amenities={property.amenities} />}
            <button>Request a Viewing</button>
        </main>
    );
}
export default PropertyDetails;