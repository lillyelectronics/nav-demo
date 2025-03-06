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


import { Stack } from 'expo-router';

export default function RootLayout() {
    return (
        <Stack>
            {/* Tabs Navigation (Home & Favorites) */}
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

            {/* Product Details Page (Uses URL Parameters) */}
            <Stack.Screen name="product/[id]" options={{ title: "Product Details" }} />

            {/* Category Page (Uses URL Parameters) */}
            <Stack.Screen name="category/[name]" options={{ title: "Category" }} />

            {/* Help Modal (bonus.js) */}
            <Stack.Screen name="bonus" options={{ presentation: "modal", title: "Help" }} />
        </Stack>
    );
}
