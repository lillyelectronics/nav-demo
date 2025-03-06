import { View, Text, FlatList, Image, StyleSheet, Linking, TouchableOpacity, Button } from 'react-native';
import { useRouter } from 'expo-router';

const ProductList = ({ searchQuery, addToFavorites }) => {
    const router = useRouter(); // ✅ Use Expo Router to navigate

    if (!searchQuery || searchQuery.length === 0) {
        return (
            <View style={styles.container}>
                <Text style={styles.message}>No products found. Try another search.</Text>
            </View>
        );
    }

    return (
        <FlatList
            data={searchQuery}
            keyExtractor={(item, index) => item.asin || index.toString()} // Use a unique key
            renderItem={({ item }) => {
                const title = item.product_title || "Title Not Available";
                const price = item.product_price || "Price Not Available";
                const imageUrl = item.product_photo || "https://via.placeholder.com/100";
                const productUrl = item.product_url; // Amazon product link

                return (
                    <TouchableOpacity onPress={() => router.push(`/product/${item.asin}?title=${title}&price=${price}&image=${imageUrl}&url=${productUrl}`)}>
                        <View style={styles.card}>
                            <Image source={{ uri: imageUrl }} style={styles.productImage} />
                            
                            <View style={styles.textContainer}>
                                <Text style={styles.title}>{title}</Text>
                                <Text style={styles.price}>{price}</Text>

                                {/* ✅ Add to Favorites Button */}
                                <Button 
                                    title="Add to Favorites" 
                                    onPress={() => addToFavorites(item)} 
                                    color="#FF6347"
                                />

                                {/* ✅ View on Amazon Button */}
                                <Button 
                                    title="View on Amazon" 
                                    onPress={() => Linking.openURL(productUrl)} 
                                    color="#007AFF"
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
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
});

export default ProductList;
