import { Link, NavLink } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

function Navbar() {
    const { favorites } = useFavorites();

    return(
        <nav>
            <h1>Property rental</h1>
            <div>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/properties">Properties</NavLink>
                    <NavLink to="/favorites">Favorites ({favorites.length})</NavLink>
                    <NavLink to="/login">Login</NavLink>
                </nav>
            </div>
        </nav>
    );
}
export default Navbar;