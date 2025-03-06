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
