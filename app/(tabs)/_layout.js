import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{ title: "Home" }} />
            <Tabs.Screen name="favorites" options={{ title: "Favorites" }} />
        </Tabs>
    );
}

import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // Import Icons

export default function TabLayout() {
    return (
        <Tabs>
            {/* Home Tab */}
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" size={size} color={color} />
                    ),
                }}
            />

            {/* Favorites Tab */}
            <Tabs.Screen
                name="favorites"
                options={{
                    title: "Favorites",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="heart-outline" size={size} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
