import { View, Text, StyleSheet } from 'react-native';

export default function HelpModal() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Help & About</Text>
      <Text>This app helps you search for Amazon products and manage favorites.</Text>
      <Text>Navigate using the tabs below and tap a product for details.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
