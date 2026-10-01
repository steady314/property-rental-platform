import { useState } from "react";
import {
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";

import properties from "../data/properties";

import { useAuth } from "../context/AuthContext";
import {
  useViewingRequests,
} from "../context/ViewingRequestsContext";

import "./RequestViewing.css";

function RequestViewing() {
  const { id } = useParams();

  const navigate = useNavigate();

  const { user } = useAuth();

  const { addRequest } =
    useViewingRequests();

  const property = properties.find(
    (property) => property.id === Number(id)
  );

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState("");

  if (!property) {
    return (
      <main className="request-page">
        <div className="request-card">
          <h1>Property Not Found</h1>

          <p>
            We couldn't find the property you're
            trying to request a viewing for.
          </p>

          <Link to="/properties">
            Browse Properties
          </Link>
        </div>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="request-page">
        <div className="request-card">
          <h1>Login Required</h1>

          <p>
            Please log in before requesting a
            property viewing.
          </p>

          <button
            className="request-button"
            onClick={() => navigate("/login")}
          >
            Log In
          </button>
        </div>
      </main>
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    setError("");

    if (!date || !time) {
      setError(
        "Please select a preferred date and time."
      );
      return;
    }

    addRequest({
      propertyId: property.id,
      propertyTitle: property.title,
      propertyLocation: property.location,
      date,
      time,
      message,
    });

    navigate("/my-requests");
  };

  return (
    <main className="request-page">
      <div className="request-card">
        <div className="request-header">
          <p className="request-type">
            Viewing Request
          </p>

          <h1>Request a Property Viewing</h1>

          <p>
            Choose a preferred date and time for
            viewing this property.
          </p>
        </div>

        <div className="request-property">
          <h2>{property.title}</h2>

          <p>{property.location}</p>

          <strong>
            ₦{property.price.toLocaleString()} / month
          </strong>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="request-form-row">
            <div className="form-group">
              <label htmlFor="viewing-date">
                Preferred Date
              </label>

              <input
                id="viewing-date"
                type="date"
                value={date}
                onChange={(event) =>
                  setDate(event.target.value)
                }
              />
            </div>

            <div className="form-group">
              <label htmlFor="viewing-time">
                Preferred Time
              </label>

              <input
                id="viewing-time"
                type="time"
                value={time}
                onChange={(event) =>
                  setTime(event.target.value)
                }
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="viewing-message">
              Message
              <span> (optional)</span>
            </label>

            <textarea
              id="viewing-message"
              value={message}
              onChange={(event) =>
                setMessage(event.target.value)
              }
              placeholder="Anything you'd like us to know?"
              rows="5"
            />
          </div>

          {error && (
            <p className="form-error">
              {error}
            </p>
          )}

          <button
            className="request-button"
            type="submit"
          >
            Submit Viewing Request
          </button>
        </form>
      </div>
    </main>
  );
}

export default RequestViewing;