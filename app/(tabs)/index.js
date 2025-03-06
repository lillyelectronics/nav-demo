import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import SearchBar from '../../components/SearchBar';
import ProductList from '../../components/ProductList';

export default function HomeScreen() {
    const [products, setProducts] = useState([]); // ✅ Define products state
    const router = useRouter(); // Navigation hook

    return (
        <View style={styles.container}>
            {/* Help Button to Open the Help Modal */}
            <Button title="Help" onPress={() => router.push('/bonus')} />

            {/* ✅ Corrected: Now passing `setProducts` to SearchBar */}
            <SearchBar setProducts={setProducts} />

            {/* ✅ Pass `products` to ProductList so it displays search results */}
            <ProductList searchQuery={products} />
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
