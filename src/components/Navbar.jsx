import {
  NavLink,
  Link,
} from "react-router-dom";

import { useFavorites } from "../context/FavoritesContext";
import { useAuth } from "../context/AuthContext";

import "./Navbar.css";

function Navbar() {
  const { favorites } = useFavorites();
  const { user, logout } = useAuth();

  return (
    <header className="site-header">
      <nav className="navbar">
        <Link
          to="/"
          className="navbar-logo"
        >
          Property Rental
        </Link>

        <div className="navbar-links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/properties"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Properties
          </NavLink>

          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Favorites

            <span className="favorite-count">
              {favorites.length}
            </span>
          </NavLink>

          {user ? (
            <>
              {user.role === "manager" && (
                <NavLink to="/manager" className={({ isActive }) => isActive ? "active" : ""}>
                  Dashboard
                </NavLink>)}
              <NavLink
                to="/my-requests"
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
              >
                My Requests
              </NavLink>

              <span className="navbar-user">
                Hi, {user.name}
              </span>

              <button
                className="navbar-logout"
                onClick={logout}
              >
                Log Out
              </button>
            </>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              Login
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;