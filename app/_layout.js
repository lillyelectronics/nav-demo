import { Stack } from 'expo-router';
import { FavoritesProvider } from '../context/FavoritesContext';
import { View } from 'react-native';

export default function RootLayout() {
    return (
        <FavoritesProvider>
            <View style={{ flex: 1 }}>
                <Stack>
                    {/* Main Tabs */}
                    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

                    {/* New Screens (Product Details & Category) */}
                    <Stack.Screen name="product/[id]" options={{ title: "Product Details" }} />
                    <Stack.Screen name="category/[name]" options={{ title: "Category" }} />

                    {/* Modal Screen (Help) */}
                    <Stack.Screen name="bonus" options={{ presentation: "modal", title: "Help" }} />
                </Stack>
            </View>
        </FavoritesProvider>
    );
}
