import React, { createContext, useState, useContext } from 'react';
import { View } from 'react-native'; // ✅ Import View

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const addToFavorites = (product) => {
        if (!favorites.find((fav) => fav.asin === product.asin)) { // Prevent duplicates
            setFavorites([...favorites, product]);
        }
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addToFavorites }}>
            <View style={{ flex: 1 }}>  {/* ✅ Wrap children inside <View> */}
                {children}
            </View>
        </FavoritesContext.Provider>
    );
};

export const useFavorites = () => useContext(FavoritesContext);
