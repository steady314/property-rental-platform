import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import Login from "./pages/Login";
import Favorites from "./pages/Favorites";
import PropertyDetails from "./pages/PropertyDetails";
import { FavoritesProvider } from "./context/FavoritesContext";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import { AuthProvider } from "./context/AuthContext";
import Register from "./pages/Register";
import MyRequests from "./pages/MyRequests";
import { ViewingRequestsProvider, } from "./context/ViewingRequestsContext";
import RequestViewing from "./pages/RequestViewing";
import ManagerDashboard from "./pages/ManagerDashboard";
import ManagerRequests from "./pages/ManagerRequests";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return(
    <BrowserRouter>
      <AuthProvider>
        <FavoritesProvider>
          <ViewingRequestsProvider>
            <Navbar />
            <main className="site-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/properties" element={<Properties />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/my-requests" element={<MyRequests />} />
              <Route path="/properties/:id" element={<PropertyDetails />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/properties/:id/request-viewing" element={<RequestViewing />} />
              <Route path="/manager" element={<ProtectedRoute role="manager">
                <ManagerDashboard /> </ProtectedRoute> } />
              <Route path="/manager/requests" element={<ProtectedRoute role="manager"> 
                <ManagerRequests /> </ProtectedRoute>} />
            </Routes>
            </main>
            <Footer />
          </ViewingRequestsProvider>
        </FavoritesProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
export default App;