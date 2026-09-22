import { createContext, useContext, useState } from "react";
const FavoritesContext = createContext();

function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState([]);
    const toggleFavorite = (propertyId) => {
        setFavorites((currentFavorites) => {if(currentFavorites.includes(propertyId)) {
            return currentFavorites.filter((id) => id !== propertyId); } return [...currentFavorites, propertyId];});};
return(
    <FavoritesContext.Provider value={{favorites, toggleFavorite,}}>{children}</FavoritesContext.Provider>
);}
function useFavorites() {
    return useContext(FavoritesContext);
}
export { FavoritesProvider, useFavorites };