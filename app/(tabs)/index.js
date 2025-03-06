import { View, Button, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import SearchBar from '../../components/SearchBar'; // ✅ Ensure this is a default import
import ProductList from '../../components/ProductList'; // ✅ Ensure this is a default import

export default function HomeScreen() {
    const [products, setProducts] = useState([]); // ✅ Ensure this exists
    const router = useRouter(); // Navigation hook

    return (
        <View style={styles.container}>
            {/* Help Button to Open the Help Modal */}
            <Button title="Help" onPress={() => router.push('/bonus')} />

            {/* ✅ Pass `setProducts` correctly */}
            <SearchBar setProducts={setProducts} />

            {/* ✅ Pass `products` correctly */}
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
