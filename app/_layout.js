import { Stack } from 'expo-router';

export default function RootLayout() {
    return (
        <Stack>
            {/* Tabs Navigation (Home & Favorites) */}
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

            {/* Product Details Page */}
            <Stack.Screen name="product/[id]" options={{ title: "Product Details" }} />

            {/* Help Modal */}
            <Stack.Screen name="bonus" options={{ presentation: "modal", title: "Help" }} />
        </Stack>
    );
}
