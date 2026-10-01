import { useState } from "react";
import PropertyGrid from "../components/PropertyGrid";
import properties from "../data/properties";
import "./Properties.css";
function Properties() {
  const [searchTerm, setSearchTerm] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const filteredProperties = properties.filter((property) => {
    const matchesLocation = property.location
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesPrice =
      maxPrice === "" ||
      property.price <= Number(maxPrice);
    const matchesBedrooms =
      bedrooms === "" ||
      property.bedrooms >= Number(bedrooms);
    return (
      matchesLocation &&
      matchesPrice &&
      matchesBedrooms
    );
  });
  return (
    <main className="properties-page">
      <section className="properties-header">
        <h1>Available Properties</h1>
        <p>
          Find a property that matches your lifestyle
          and budget.
        </p>
      </section>
      <section className="property-filters">
        <div className="property-search">
          <label htmlFor="location-search">
            Location
          </label>
          <input
            id="location-search"
            type="search"
            placeholder="e.g. Wuse, Maitama, Gwarinpa"
            value={searchTerm}
            onChange={(event) =>
              setSearchTerm(event.target.value)
            }
          />
        </div>
        <div className="property-filter">
          <label htmlFor="max-price">
            Maximum Price
          </label>
          <input
            id="max-price"
            type="number"
            min="0"
            placeholder="e.g. 300000"
            value={maxPrice}
            onChange={(event) =>
              setMaxPrice(event.target.value)
            }
          />
        </div>
        <div className="property-filter">
          <label htmlFor="bedrooms">
            Bedrooms
          </label>
          <select
            id="bedrooms"
            value={bedrooms}
            onChange={(event) =>
              setBedrooms(event.target.value)
            }
          >
            <option value="">
              Any number
            </option>
            <option value="1">1+ bedroom</option>
            <option value="2">2+ bedrooms</option>
            <option value="3">3+ bedrooms</option>
            <option value="4">4+ bedrooms</option>
          </select>
        </div>
      </section>
      <section className="property-results">
        <p className="property-results-count">
          {filteredProperties.length}{" "}
          {filteredProperties.length === 1
            ? "property"
            : "properties"}{" "}
          found
        </p>
        {filteredProperties.length === 0 ? (
          <div className="search-empty">
            <h2>No properties found</h2>
            <p>
              Try changing your search or filter
              options.
            </p>
          </div>
        ) : (
          <PropertyGrid
            properties={filteredProperties}
          />
        )}
      </section>
    </main>
  );
}
export default Properties;