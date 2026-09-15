import PropertyCard from "./PropertyCard";
import properties from "../data/properties";
function FeaturedProperties() {
    return(
        <section>
            <h2>Featured properties</h2>
            <p>Explore some of our properties available for rent.</p>
            <div>
                {properties.slice(0,3).map((property) => (<PropertyCard key={property.id} property={property} />))}
            </div>
        </section>
    )
}
export default FeaturedProperties;