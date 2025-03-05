import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useState } from 'react';
import SearchBar from '../../components/SearchBar';
import ProductList from '../../components/ProductList';

export default function HomeScreen() {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <View style={styles.container}>
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
