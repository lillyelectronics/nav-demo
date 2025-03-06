import { Stack } from 'expo-router';
import { FavoritesProvider } from '../context/FavoritesContext'; // ✅ Import Favorites Context
import { View } from 'react-native'; // ✅ Import View

export default function RootLayout() {
    return (
        <FavoritesProvider>
            <View style={{ flex: 1 }}>  {/* ✅ Ensure there's a proper container */}
                <Stack>
                    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                    <Stack.Screen name="product/[id]" options={{ title: "Product Details" }} />
                    <Stack.Screen name="bonus" options={{ presentation: "modal", title: "Help" }} />
                </Stack>
            </View>
        </FavoritesProvider>
    );
}
