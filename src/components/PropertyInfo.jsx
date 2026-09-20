function PropertyInfo({ property }) {
    return(
        
            <section className="property-overview">
                <h2>Property Overview</h2>
                <p>{property.bedrooms} Bedrooms .{" "} {property.bathrooms} Bathrooms .{" "}</p>
                <p>{property.size} sq ft</p>
                <p>{property.description}</p>
            </section>
    );
}
export default PropertyInfo;