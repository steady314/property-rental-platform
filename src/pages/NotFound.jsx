import { Link } from "react-router-dom"

function NotFound() {
    return(
        <main>
            <h1>Page Not Found</h1>
            <p>Sorry, the page you're looking for doesn't exist.</p>
            <Link to="/">Home</Link>
        </main>
    );
}
export default NotFound;