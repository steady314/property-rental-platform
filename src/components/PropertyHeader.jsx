function PropertyHeader({ property }) {
    return(
        <section className="property-details-header">
            <div>
                <p className="property-details-header">{property.type}</p>
                <h1>{property.title}</h1>
                <p className="property-details-location">{property.location}</p>
            </div>
        </section>
    );
}
export default PropertyHeader;