function PropertyAmenities({ amenities }) {
    return(
        <section className="property-amenities">
                <h2>Amenities</h2>
                <ul>
                    {amenities.map((amenity) => (
                        <li key={amenity}>{amenity}</li>
                    ))}
                </ul>
        </section>
    );
}
export default PropertyAmenities;