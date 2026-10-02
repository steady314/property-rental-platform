import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import properties from "../data/properties";
import { useAuth } from "../context/AuthContext";
import { useViewingRequests } from "../context/ViewingRequestsContext";
import StatusMessage from "../components/StatusMessage";

import "./RequestViewing.css";

function RequestViewing() {
  const { propertyId } = useParams();

  const navigate = useNavigate();

  const { user } = useAuth();

  const {
    userRequests,
    addRequest,
  } = useViewingRequests();

  const property = properties.find(
    (item) => item.id === Number(propertyId)
  );

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] =
    useState(false);

  if (!user) {
    navigate("/login");
    return null;
  }

  if (!property) {
    return (
      <main className="request-page">
        <div className="request-container">
          <StatusMessage type="error">
            Property not found.
          </StatusMessage>
        </div>
      </main>
    );
  }

  const getLocalDateString = (value = new Date()) => {
    const year = value.getFullYear();
    const month = String(value.getMonth() + 1).padStart(2, "0");
    const day = String(value.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const today = getLocalDateString();

  const handleSubmit = (event) => {
    event.preventDefault();

    setError("");

    const cleanMessage = message.trim();

    if (!date || !time) {
      setError(
        "Please select a viewing date and time."
      );
      return;
    }

    const selectedDate = new Date(`${date}T00:00:00`);
    const todayDate = new Date(`${today}T00:00:00`);

    if (selectedDate < todayDate) {
      setError(
        "Please select today or a future date."
      );
      return;
    }

    const duplicateRequest =
      userRequests.some(
        (request) =>
          request.propertyId === property.id &&
          request.date === date &&
          request.time === time
      );

    if (duplicateRequest) {
      setError(
        "You already have a request for this property at that date and time."
      );
      return;
    }

    setIsSubmitting(true);

    addRequest({
      propertyId: property.id,
      propertyTitle: property.title,
      propertyLocation: property.location,
      date,
      time,
      message: cleanMessage,
    });

    setIsSubmitting(false);

    navigate("/my-requests");
  };

  return (
    <main className="request-page">
      <div className="request-container">
        <div className="request-header">
          <p className="request-label">
            Viewing Request
          </p>

          <h1>
            Request a Viewing
          </h1>

          <p className="request-intro">
            Choose a convenient date and time to
            view this property.
          </p>
        </div>

        <div className="request-property">
          <h2>{property.title}</h2>

          <p>{property.location}</p>

          <p>
            ₦{property.price.toLocaleString()} / year
          </p>
        </div>

        {error && (
          <StatusMessage type="error">
            {error}
          </StatusMessage>
        )}

        <form
          className="request-form"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="viewing-date">
              Viewing Date
            </label>

            <input
              id="viewing-date"
              type="date"
              min={today}
              value={date}
              onChange={(event) =>
                setDate(event.target.value)
              }
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="viewing-time">
              Viewing Time
            </label>

            <input
              id="viewing-time"
              type="time"
              value={time}
              onChange={(event) =>
                setTime(event.target.value)
              }
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="viewing-message">
              Message
            </label>

            <textarea
              id="viewing-message"
              rows="5"
              placeholder="Add any questions or information for the property manager..."
              value={message}
              onChange={(event) =>
                setMessage(event.target.value)
              }
            />
          </div>

          <button
            className="request-button"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? "Submitting..."
              : "Submit Viewing Request"}
          </button>
        </form>
      </div>
    </main>
  );
}

export default RequestViewing;