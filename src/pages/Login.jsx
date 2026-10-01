import { useState } from "react";
import {
  Link,
  useNavigate,
} from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Auth.css";
function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    if (!email || !password) {
      setError(
        "Please enter your email and password."
      );
      return;
    }
    const result = login(email, password);
    if (!result.success) {
      setError(result.message);
      return;
    }
    navigate("/");
  };
  return (
    <main className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <h1>Welcome Back</h1>
          <p>
            Log in to manage your saved properties
            and viewing requests.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="login-email">
              Email
            </label>
            <input
              id="login-email"
              type="email"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              placeholder="you@example.com"
              autoComplete="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="login-password">
              Password
            </label>
            <input
              id="login-password"
              type="password"
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
              placeholder="Enter your password"
              autoComplete="current-password"
            />
          </div>
          {error && (
            <p className="form-error">
              {error}
            </p>
          )}
          <button
            className="auth-button"
            type="submit"
          >
            Log In
          </button>
        </form>
        <p className="auth-switch">
          Don't have an account?{" "}
          <Link to="/register">
            Create one
          </Link>
        </p>
      </div>
    </main>
  );
}
export default Login;