import { View, Text, FlatList, Image, StyleSheet, Linking } from 'react-native';
import { useFavorites } from '../../context/FavoritesContext'; // ✅ Import Favorites Context

function FavoritesScreen() {
    const { favorites } = useFavorites(); // ✅ Get favorites from global context

    if (!favorites || favorites.length === 0) {
        return (
            <View style={styles.container}>
                <Text style={styles.message}>No favorites added yet.</Text>
            </View>
        );
    }

    return (
        <FlatList
            data={favorites}
            keyExtractor={(item, index) => item.asin || index.toString()} // Use a unique key
            renderItem={({ item }) => {
                const title = item.product_title || "Title Not Available";
                const price = item.product_price || "Price Not Available";
                const imageUrl = item.product_photo || "https://via.placeholder.com/100";
                const productUrl = item.product_url; // Amazon product link

                return (
                    <View style={styles.card}>
                        <Image source={{ uri: imageUrl }} style={styles.productImage} />
                        
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>{title}</Text>
                            <Text style={styles.price}>{price}</Text>

                            {/* ✅ View on Amazon Button */}
                            <Text style={styles.link} onPress={() => Linking.openURL(productUrl)}>
                                View on Amazon
                            </Text>
                        </View>
                    </View>
                );
            }}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    message: {
        fontSize: 16,
        color: 'gray',
    },
    card: {
        flexDirection: 'row',
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    textContainer: {
        flex: 1,
        marginLeft: 10,
    },
    productImage: {
        width: 80,
        height: 80,
        borderRadius: 5,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 14,
        color: 'green',
        marginTop: 5,
    },
    link: {
        color: '#007AFF',
        marginTop: 5,
    },
});

export default FavoritesScreen;
