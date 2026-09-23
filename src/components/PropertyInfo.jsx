function PropertyInfo({ property }) {
    return(
        
            <section className="property-overview">
                <h2>Property Overview</h2>
                <div className="property-statistics">
                    <div>
                      <strong>{property.bedrooms}</strong>
                      <span>Bedrooms</span>
                    </div>
                    <div>
                        <strong>{property.bathrooms}</strong>
                        <span>Bathrooms</span>
                    </div>
                    <div>
                      <strong>{property.size}</strong>
                      <span>sq ft</span>
                    </div>
                </div>
                <p className="property-description">{property.description}</p>
            </section>
    );
}
export default PropertyInfo;