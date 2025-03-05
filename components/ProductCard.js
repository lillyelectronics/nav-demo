import React, { useState } from 'react';
import { Linking, Image, SafeAreaView, View, Text, StyleSheet, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';


const ProductCard = ({ product, isFavoritesList, onAddToFavorites, onRemoveFromFavorites }) => {
    return (
        <View style={styles.productCard}>
            <Image source={{ uri: product.product_photo }} style={styles.image} />
            <Text style={styles.title}>{product.product_title}</Text>
            <Text style={styles.price}>{product.product_price}</Text>
            <Text style={styles.ratings}>Rating: {product.product_star_rating || 'N/A'}</Text>
            <Text style={styles.asin}>Asin: {product.asin || 'N/A'}</Text>
            {/* View on Amazon */}
            <TouchableOpacity 
                style={styles.viewButton} 
                onPress={() => Linking.openURL(product.product_url)}
            >
                <Text style={styles.buttonText}>View on Amazon</Text>
            </TouchableOpacity>



            {/* Conditional buttons based on list type */}
            {isFavoritesList ? (
                <TouchableOpacity 
                    style={styles.removeButton} 
                    onPress={() => onRemoveFromFavorites(product)}
                >
                    <Text style={styles.buttonText}>Delete from Favorites</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity 
                    style={styles.favoriteButton} 
                    onPress={() => onAddToFavorites(product)}
                >
                    <Text style={styles.buttonText}>Add to Favorites</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    productCard: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
        width: 200,
        // backgroundColor: '#fff',
        backgroundColor: '#ffdab9',
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    title: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    price: {
        fontSize: 14,
        color: 'green',
        marginBottom: 5,
    },
    ratings: {
        fontSize: 12,
        color: 'gray',
        marginBottom: 5,
    },
    asin: {
        fontSize: 12,
        color: 'gray',
        marginBottom: 10,
    },
    viewButton: {
        backgroundColor: '#007AFF',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 5,
        marginBottom: 10,
    },
    removeButton: {
        backgroundColor: 'red',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 5,
        marginBottom: 10,
    },
    favoriteButton: {
        backgroundColor: 'orange',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default ProductCard;