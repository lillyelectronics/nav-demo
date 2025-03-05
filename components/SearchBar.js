import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';


const SearchBar = ({ setProducts, isDarkMode }) => {

  
// const SearchBar = ({ setProducts }) => {
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        console.log("handle search 1");
        if (!query) return;
        setLoading(true);

        console.log("handle search 2");
        try {
            console.log("handle search 3");

            // Replace this with your actual API endpoint
            const response = await fetch(
                `https://real-time-amazon-data.p.rapidapi.com/search?query=${query}&page=1&country=US`,
                {
                    method: "GET",
                    headers: {
                        "X-RapidAPI-Key": "7c0c1721f9msh19b58ae257761c8p1fa935jsne6cb007bdd92",
                        "X-RapidAPI-Host": "real-time-amazon-data.p.rapidapi.com",
                    },
                }
            );
        console.log("handle search 4");
        console.log(response);

            const data = await response.json();
            console.log("handle search 5");
            console.log(data);

            // Verify if data.products exists and contains the expected structure
            // setProducts(data.data.products || []);
            setProducts(data.data.products ? data.data.products.slice(0, 1) : []);
            console.log("handle search 6");

        } catch (error) {
        console.log("handle search 7");

            console.error("Error fetching products:", error);
            setProducts([]); // Reset products on error
        } finally {
        console.log("handle search 8");

            setLoading(false);
        console.log("handle search 9");

        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                // style={styles.input}
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
                onChangeText={(e) => {
                    console.log("HELLO THIS IS ARLI");
                    console.log(e); // e == Pbj
                    console.log("THE VALUE OF E IS ABOVE");

                    setQuery(e)
                }} // use onChangeText for TextInput in React Native
            />

            <Button title="Search" onPress={handleSearch} />

            {loading && <Text style={styles.loading}>Loading...</Text>}

        </View>
    );
};


const TextInputExample = () => {
    const [text, onChangeText] = React.useState('Search Amazon Products');
    const [number, onChangeNumber] = React.useState('');
}
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

export default SearchBar;