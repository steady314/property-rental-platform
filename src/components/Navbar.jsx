import { Link, NavLink } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import "./Navbar.css";

function Navbar() {
    const { favorites } = useFavorites();

    return(
        <header className="site-header">
           <nav className="navbar">
               <NavLink to="/" className="navbar-logo">Property Rental</NavLink>
               <div className="navbar-links">
                   <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                   <NavLink to="/properties" className={({ isActive }) => isActive ? "active" : ""}>Properties</NavLink>
                   <NavLink to="/favorites" className={({ isActive }) => isActive ? "active" : ""}>Favorites 
                   <span className="favorite-count">({favorites.length})</span></NavLink>
                   <NavLink to="/login" className={({ isActive }) => isActive ? "active" : ""}>Login</NavLink>
            </div>
        </nav>
    </header>
    );
}
export default Navbar;