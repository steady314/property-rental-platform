import { Link, NavLink } from "react-router-dom";
function Navbar() {
    return(
        <nav>
            <h1>Property rental</h1>
            <div>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/properties">Properties</NavLink>
                    <NavLink to="/favorites">Favorites</NavLink>
                    <NavLink to="/login">Login</NavLink>
                </nav>
            </div>
        </nav>
    );
}
export default Navbar;