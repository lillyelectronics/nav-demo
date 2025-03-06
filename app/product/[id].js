import { View, Text, Image, Button, StyleSheet, Linking } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function ProductDetailsScreen() {
    const { title, price, image, url } = useLocalSearchParams(); // ✅ Get product details from URL

    return (
        <View style={styles.container}>
            <Image source={{ uri: image }} style={styles.productImage} />
            <Text style={styles.title}>{title || "No Title Available"}</Text>
            <Text style={styles.price}>{price || "Price Not Available"}</Text>

            {/* View on Amazon Button */}
            <Button title="View on Amazon" onPress={() => Linking.openURL(url)} color="#007AFF" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    productImage: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginBottom: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    price: {
        fontSize: 16,
        color: 'green',
        marginBottom: 10,
    },
});
