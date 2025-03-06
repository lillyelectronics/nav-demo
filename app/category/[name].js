import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function CategoryScreen() {
    const { name } = useLocalSearchParams(); // ✅ Get category name from URL

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Category: {name}</Text>
            <Text style={styles.message}>This is where products from the {name} category will be displayed.</Text>
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
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    message: {
        fontSize: 16,
        color: 'gray',
        marginTop: 10,
        textAlign: 'center',
    },
});
