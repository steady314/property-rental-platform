import { Link } from "react-router-dom";

import { useAuth } from "../context/AuthContext";
import {
  useViewingRequests,
} from "../context/ViewingRequestsContext";

import "./MyRequests.css";

function MyRequests() {
  const { user } = useAuth();

  const { requests } =
    useViewingRequests();

  if (!user) {
    return (
      <main className="requests-page">
        <div className="requests-empty">
          <h1>Login Required</h1>

          <p>
            Please log in to view your viewing
            requests.
          </p>

          <Link to="/login">
            Log In
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="requests-page">
      <section className="requests-header">
        <div>
          <p>Account</p>

          <h1>My Viewing Requests</h1>

          <span>
            Track the properties you've requested
            to view.
          </span>
        </div>
      </section>

      {requests.length === 0 ? (
        <div className="requests-empty">
          <h2>No viewing requests yet</h2>

          <p>
            When you request a property viewing,
            it will appear here.
          </p>

          <Link to="/properties">
            Browse Properties
          </Link>
        </div>
      ) : (
        <section className="requests-list">
          {requests.map((request) => (
            <article
              className="request-item"
              key={request.id}
            >
              <div className="request-item-main">
                <div>
                  <p className="request-status">
                    {request.status}
                  </p>

                  <h2>
                    {request.propertyTitle}
                  </h2>

                  <p className="request-location">
                    {request.propertyLocation}
                  </p>
                </div>

                <div className="request-date">
                  <strong>
                    {request.date}
                  </strong>

                  <span>
                    {request.time}
                  </span>
                </div>
              </div>

              {request.message && (
                <p className="request-message">
                  <strong>Message:</strong>{" "}
                  {request.message}
                </p>
              )}
            </article>
          ))}
        </section>
      )}
    </main>
  );
}

export default MyRequests;