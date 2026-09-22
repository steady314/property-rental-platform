import { Link, NavLink } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import "./Navbar.css";

function Navbar() {
    const { favorites } = useFavorites();

    return(
        <nav>
            <h1>Property rental</h1>
            <div>
                <nav>
                    <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                    <NavLink to="/properties" className={({ isActive }) => isActive ? "active" : ""}>Properties</NavLink>
                    <NavLink to="/favorites" className={({ isActive }) => isActive ? "active" : ""}>Favorites ({favorites.length})</NavLink>
                    <NavLink to="/login" className={({ isActive }) => isActive ? "active" : ""}>Login</NavLink>
                </nav>
            </div>
        </nav>
    );
}
export default Navbar;