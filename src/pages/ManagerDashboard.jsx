import {
  Link,
} from "react-router-dom";

import {
  useAuth,
} from "../context/AuthContext";

import {
  useViewingRequests,
} from "../context/ViewingRequestsContext";

import "./ManagerDashboard.css";

function ManagerDashboard() {
  const { user } = useAuth();

  const { requests } =
    useViewingRequests();

  const pendingRequests =
    requests.filter(
      (request) =>
        request.status === "Pending"
    );

  const approvedRequests =
    requests.filter(
      (request) =>
        request.status === "Approved"
    );

  const rejectedRequests =
    requests.filter(
      (request) =>
        request.status === "Rejected"
    );

  return (
    <main className="manager-page">
      <section className="manager-header">
        <div>
          <p className="manager-label">
            Manager Dashboard
          </p>

          <h1>
            Welcome back, {user.name}
          </h1>

          <p>
            Manage property viewing requests
            from your customers.
          </p>
        </div>
      </section>

      <section className="manager-statistics">
        <div className="manager-stat-card">
          <span>Total Requests</span>

          <strong>
            {requests.length}
          </strong>
        </div>

        <div className="manager-stat-card">
          <span>Pending</span>

          <strong>
            {pendingRequests.length}
          </strong>
        </div>

        <div className="manager-stat-card">
          <span>Approved</span>

          <strong>
            {approvedRequests.length}
          </strong>
        </div>

        <div className="manager-stat-card">
          <span>Rejected</span>

          <strong>
            {rejectedRequests.length}
          </strong>
        </div>
      </section>

      <section className="manager-actions">
        <div>
          <h2>
            Viewing Requests
          </h2>

          <p>
            Review and manage customer
            viewing requests.
          </p>
        </div>

        <Link
          to="/manager/requests"
          className="manager-action-button"
        >
          Manage Requests
        </Link>
      </section>
    </main>
  );
}

export default ManagerDashboard;