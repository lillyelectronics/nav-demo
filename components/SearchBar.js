import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const SearchBar = ({ setProducts, isDarkMode }) => {
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        if (!query || query.trim() === "") {
            console.log("Error: Search query is empty. Please enter a keyword.");
            return;
        }

        setLoading(true);
        console.log(`Searching for: ${query}`);

        try {
            const apiUrl = `https://real-time-amazon-data.p.rapidapi.com/search?query=${encodeURIComponent(query)}&page=1&country=US`;
            console.log(`Fetching data from: ${apiUrl}`);

            const response = await fetch(apiUrl, {
                method: "GET",
                headers: {
                    "X-RapidAPI-Key": "7c0c1721f9msh19b58ae257761c8p1fa935jsne6cb007bdd92",
                    "X-RapidAPI-Host": "real-time-amazon-data.p.rapidapi.com",
                },
            });

            const data = await response.json();
            console.log("Full API Response:", JSON.stringify(data, null, 2)); // ✅ Debugging log

            if (data && data.data && data.data.products) {
                console.log(`Found ${data.data.products.length} products.`);
                setProducts(data.data.products);
            } else {
                console.log("No products found.");
                setProducts([]); // Reset product list if no results are found
            }
        } catch (error) {
            console.error("Error fetching products:", error);
            setProducts([]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={[
                    styles.input,
                    {
                        backgroundColor: isDarkMode ? "#333" : "#fff",
                        color: isDarkMode ? "#fff" : "#000",
                        borderColor: isDarkMode ? "#fff" : "gray",
                    }
                ]}
                placeholder="Search for products"
                value={query}
                onChangeText={setQuery}
            />

            <Button title="Search" onPress={handleSearch} />

            {loading && <Text style={styles.loading}>Loading...</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    input: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
        borderRadius: 5,
    },
    loading: {
        fontSize: 16,
        color: 'gray',
        marginTop: 10,
    },
});

// ✅ Ensure this is the last line:
export default SearchBar;
