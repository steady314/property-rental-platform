import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Auth.css";
function Register() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    if (!name || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    if (password.length < 6) {
      setError(
        "Password must be at least 6 characters."
      );
      return;
    }
    const result = register(
      name,
      email,
      password
    );
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
          <h1>Create an Account</h1>
          <p>
            Create your account to save properties
            and request viewings.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(event) =>
                setName(event.target.value)
              }
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="register-email">
              Email
            </label>
            <input
              id="register-email"
              type="email"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              placeholder="you@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="register-password">
              Password
            </label>
            <input
              id="register-password"
              type="password"
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
              placeholder="At least 6 characters"
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
            Create Account
          </button>
        </form>
        <p className="auth-switch">
          Already have an account?{" "}
          <Link to="/login">
            Log in
          </Link>
        </p>
      </div>
    </main>
  );
}
export default Register;