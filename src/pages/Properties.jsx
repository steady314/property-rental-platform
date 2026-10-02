import { useState } from "react";

import PropertyGrid from "../components/PropertyGrid";
import properties from "../data/properties";

import "./Properties.css";

function Properties() {
  const [searchTerm, setSearchTerm] =
    useState("");

  const [maxPrice, setMaxPrice] =
    useState("");

  const [bedrooms, setBedrooms] =
    useState("");

  const [sortBy, setSortBy] =
    useState("");

  const filteredProperties =
    properties.filter((property) => {
      const matchesLocation =
        property.location
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          );

      const matchesPrice =
        maxPrice === "" ||
        property.price <=
          Number(maxPrice);

      const matchesBedrooms =
        bedrooms === "" ||
        property.bedrooms >=
          Number(bedrooms);

      return (
        matchesLocation &&
        matchesPrice &&
        matchesBedrooms
      );
    });

  const sortedProperties = [
    ...filteredProperties,
  ].sort((a, b) => {
    if (sortBy === "price-low") {
      return a.price - b.price;
    }

    if (sortBy === "price-high") {
      return b.price - a.price;
    }

    return 0;
  });

  return (
    <main className="properties-page">
      <section className="properties-header">
        <h1>Available Properties</h1>

        <p>
          Find a property that matches your
          lifestyle and budget.
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
            placeholder="e.g. Chicago, Boston, etc."
            value={searchTerm}
            onChange={(event) =>
              setSearchTerm(
                event.target.value
              )
            }
          />
        </div>

        <div className="property-filter">
          <label htmlFor="max-price">
            Maximum Price ($)
          </label>

          <input
            id="max-price"
            type="number"
            min="0"
            placeholder="e.g. 3000"
            value={maxPrice}
            onChange={(event) =>
              setMaxPrice(
                event.target.value
              )
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
              setBedrooms(
                event.target.value
              )
            }
          >
            <option value="">
              Any number
            </option>

            <option value="1">
              1+ bedroom
            </option>

            <option value="2">
              2+ bedrooms
            </option>

            <option value="3">
              3+ bedrooms
            </option>

            <option value="4">
              4+ bedrooms
            </option>
          </select>
        </div>

        <div className="property-filter">
          <label htmlFor="sort-by">
            Sort By
          </label>

          <select
            id="sort-by"
            value={sortBy}
            onChange={(event) =>
              setSortBy(
                event.target.value
              )
            }
          >
            <option value="">
              Recommended
            </option>

            <option value="price-low">
              Price: Low to High
            </option>

            <option value="price-high">
              Price: High to Low
            </option>
          </select>
        </div>
      </section>

      <section className="property-results">
        <p className="property-results-count">
          {sortedProperties.length}{" "}
          {sortedProperties.length === 1
            ? "property"
            : "properties"}{" "}
          found
        </p>

        {sortedProperties.length === 0 ? (
          <div className="search-empty">
            <h2>No properties found</h2>

            <p>
              Try changing your search or
              filter options.
            </p>
          </div>
        ) : (
          <PropertyGrid
            properties={
              sortedProperties
            }
          />
        )}
      </section>
    </main>
  );
}

export default Properties;