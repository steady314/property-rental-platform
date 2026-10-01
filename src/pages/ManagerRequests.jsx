import {
  useViewingRequests,
} from "../context/ViewingRequestsContext";

import "./ManagerRequests.css";

function ManagerRequests() {
  const {
    requests,
    updateRequestStatus,
  } = useViewingRequests();

  const handleStatusChange = (
    requestId,
    status
  ) => {
    updateRequestStatus(
      requestId,
      status
    );
  };

  return (
    <main className="manager-requests-page">
      <section className="manager-requests-header">
        <p>
          Manager Dashboard
        </p>

        <h1>
          Viewing Requests
        </h1>

        <span>
          Review and manage requests from
          customers.
        </span>
      </section>

      {requests.length === 0 ? (
        <div className="manager-empty">
          <h2>
            No viewing requests
          </h2>

          <p>
            Customer viewing requests will
            appear here.
          </p>
        </div>
      ) : (
        <section className="manager-request-list">
          {requests.map((request) => (
            <article
              className="manager-request-card"
              key={request.id}
            >
              <div className="manager-request-top">
                <div>
                  <span
                    className={`request-status status-${request.status.toLowerCase()}`}
                  >
                    {request.status}
                  </span>

                  <h2>
                    {request.propertyTitle}
                  </h2>

                  <p>
                    {request.propertyLocation}
                  </p>
                </div>

                <div className="manager-request-date">
                  <strong>
                    {request.date}
                  </strong>

                  <span>
                    {request.time}
                  </span>
                </div>
              </div>

              <div className="customer-information">
                <h3>
                  Customer
                </h3>

                <p>
                  {request.userName}
                </p>

                <p>
                  {request.userEmail}
                </p>
              </div>

              {request.message && (
                <div className="customer-message">
                  <strong>
                    Customer message
                  </strong>

                  <p>
                    {request.message}
                  </p>
                </div>
              )}

              <div className="manager-request-actions">
                <button
                  className="approve-button"
                  onClick={() =>
                    handleStatusChange(
                      request.id,
                      "Approved"
                    )
                  }
                  disabled={
                    request.status ===
                    "Approved"
                  }
                >
                  Approve
                </button>

                <button
                  className="reject-button"
                  onClick={() =>
                    handleStatusChange(
                      request.id,
                      "Rejected"
                    )
                  }
                  disabled={
                    request.status ===
                    "Rejected"
                  }
                >
                  Reject
                </button>

                {request.status !==
                  "Pending" && (
                  <button
                    className="pending-button"
                    onClick={() =>
                      handleStatusChange(
                        request.id,
                        "Pending"
                      )
                    }
                  >
                    Mark Pending
                  </button>
                )}
              </div>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}

export default ManagerRequests;