import { View, Button, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import SearchBar from '../../components/SearchBar';
import ProductList from '../../components/ProductList';
import { useFavorites } from '../../context/FavoritesContext'; // ✅ Import Favorites

export default function HomeScreen() {
    const [products, setProducts] = useState([]); // ✅ Store search results
    const { addToFavorites } = useFavorites(); // ✅ Use global favorites
    const router = useRouter(); // Navigation hook

    return (
        <View style={styles.container}>
            {/* Help Button to Open the Help Modal */}
            <Button title="Help" onPress={() => router.push('/bonus')} />

            {/* ✅ Pass setProducts and addToFavorites to children components */}
            <SearchBar setProducts={setProducts} />
            <ProductList searchQuery={products} addToFavorites={addToFavorites} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
});
