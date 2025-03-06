import { View, Text, Switch, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function SettingsScreen() {
    const [isDarkMode, setIsDarkMode] = useState(false); // ✅ Dark Mode State

    return (
        <View style={[styles.container, isDarkMode && styles.darkContainer]}>
            <Text style={[styles.text, isDarkMode && styles.darkText]}>Dark Mode</Text>
            <Switch
                value={isDarkMode}
                onValueChange={() => setIsDarkMode((prev) => !prev)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    darkContainer: {
        backgroundColor: '#121212',
    },
    text: {
        fontSize: 18,
    },
    darkText: {
        color: '#fff',
    },
});
