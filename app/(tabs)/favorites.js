import { View, Text, StyleSheet } from 'react-native';
import ProductList from '../../components/ProductList';

export default function FavoritesScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Favorites</Text>
            <ProductList showFavorites={true} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});
