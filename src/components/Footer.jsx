import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
    return(
        <footer className="site-footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <h2>Property Rental</h2>
                    <p>Find comfortable homes in th elocation that work for you.</p>
                </div>
                <div className="footer-links">
                    <Link to="/">Home</Link>
                    <Link to="/properties">Properties</Link>
                    <Link to="/favorites">Favorites</Link>
                </div>
                <div className="footer-links">
                    <h3>Account</h3>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            </div>
            <div className="footer-bottom">
                <p>2026 Property Rental. All rights reserved.</p>
            </div>
        </footer>
    );
}
export default Footer;