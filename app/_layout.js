import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="product/[id]" options={{ title: "Product Details" }} />
      <Stack.Screen name="category/[name]" options={{ title: "Category" }} />
      <Stack.Screen name="modal" options={{ presentation: "modal", title: "Help" }} />
    </Stack>
  );
}

