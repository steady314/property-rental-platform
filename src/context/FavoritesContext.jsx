import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useAuth } from "./AuthContext";
const FavoritesContext = createContext();
function FavoritesProvider({ children }) {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    if (!user) {
      setFavorites([]);
      return;
    }
    const savedFavorites = localStorage.getItem(
      `propertyRentalFavorites_${user.email}`
    );
    setFavorites(
      savedFavorites
        ? JSON.parse(savedFavorites)
        : []
    );
  }, [user]);
  useEffect(() => {
    if (!user) {
      return;
    }
    localStorage.setItem(
      `propertyRentalFavorites_${user.email}`,
      JSON.stringify(favorites)
    );
  }, [favorites, user]);
  const toggleFavorite = (propertyId) => {
    if (!user) {
      return;
    }
    setFavorites((currentFavorites) => {
      if (currentFavorites.includes(propertyId)) {
        return currentFavorites.filter(
          (id) => id !== propertyId
        );
      }
      return [...currentFavorites, propertyId];
    });
  };
  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        toggleFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
function useFavorites() {
  return useContext(FavoritesContext);
}
export {
  FavoritesProvider,
  useFavorites,
};