function PropertyHeader({ property }) {
    return(
        <section className="property-details-header">
            <div>
                <p>{property.type}</p>
                <p>{property.title}</p>
                <p>{property.location}</p>
                <p>#{property.price.toLocaleString()}</p>
            </div>
        </section>
    );
}
export default PropertyHeader;