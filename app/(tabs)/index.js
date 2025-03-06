import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import SearchBar from '../../components/SearchBar';
import ProductList from '../../components/ProductList';

export default function HomeScreen() {
    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter(); // Navigation hook

    return (
        <View style={styles.container}>
            {/* Help Button to Open the Help Modal */}
            <Button title="Help" onPress={() => router.push('/bonus')} />

            <SearchBar value={searchQuery} onChangeText={setSearchQuery} />
            <ProductList searchQuery={searchQuery} />
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
