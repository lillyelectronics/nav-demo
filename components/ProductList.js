
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ProductCard from "./ProductCard";


const ProductList = ({ products, onAddToFavorites, onRemoveFromFavorites, setFavorites, isFavoritesList }) => {

    const handleRemoveFromFavorites = (productToRemove) => {
        console.log("hi it's lilly, what's happening");
        console.log(productToRemove);
        console.log(products);
        console.log(setFavorites);
        console.log("hi it's lilly, oh no")
        setFavorites((prevFavorites) => {
            console.log("we are inside setfavorites");
            console.log(prevFavorites);
            console.log(productToRemove);
            console.log("oh how fun");
            return prevFavorites.filter((product) => product.asin !== productToRemove);
        });
    };

    return (
        <View style={styles.container}>
            {products.map((product) => (
                <ProductCard
                    key={product.asin}
                    product={product}
                    setFavorites={setFavorites}
                    onAddToFavorites={onAddToFavorites}
                    onRemoveFromFavorites={handleRemoveFromFavorites} // Use the handleRemoveFromFavorites function
                    isFavoritesList={isFavoritesList}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
});

export default ProductList;
