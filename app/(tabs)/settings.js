import { useState } from 'react';
import { View, Text, Switch, SafeAreaView, StyleSheet } from 'react-native';

export default function SettingsScreen() {
    const [isDarkMode, setIsDarkMode] = useState(false); // Theme state

    // Toggle theme switch
    const toggleSwitch = () => setIsDarkMode((prev) => !prev);

    return (
        <SafeAreaView style={isDarkMode ? styles.darkSafe : styles.safe}>
            <View style={styles.container}>
                <Text style={isDarkMode ? styles.darkText : styles.text}>Dark Mode</Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
                    onValueChange={toggleSwitch}
                    value={isDarkMode}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    darkSafe: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 18,
        color: '#000',
        marginBottom: 10,
    },
    darkText: {
        fontSize: 18,
        color: '#fff',
        marginBottom: 10,
    },
});
