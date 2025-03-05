import { View, Text, FlatList, StyleSheet } from 'react-native';
import ProductCard from './ProductCard';

export default function ProductList({ searchQuery, showFavorites = false }) {
    const products = [
        { id: "1", title: "Example Product 1", image: "https://via.placeholder.com/150" },
        { id: "2", title: "Example Product 2", image: "https://via.placeholder.com/150" }
    ]; // Replace with real API data if available.

    if (!products || products.length === 0) {
        return (
            <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>No products found</Text>
            </View>
        );
    }

    return (
        <FlatList
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ProductCard product={item} />}
        />
    );
}

const styles = StyleSheet.create({
    emptyContainer: {
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    emptyText: {
        fontSize: 16,
        color: "#555",
    },
});
