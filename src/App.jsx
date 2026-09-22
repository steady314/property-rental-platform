import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import Login from "./pages/Login";
import Favorites from "./pages/Favorites";
import PropertyDetails from "./pages/PropertyDetails";
import { FavoritesProvider } from "./context/FavoritesContext";
import NotFound from "./pages/NotFound";

function App() {
  return(
    <BrowserRouter>
      <FavoritesProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/login" element={<Login />} />
          <Route path="/properties/:id" element={<PropertyDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </FavoritesProvider>
    </BrowserRouter>
  );
}
export default App;