import { Text, View, StyleSheet } from 'react-native';
import { useLocalSearchParams } from "expo-router";

export default function SettingsScreen() {

  const { special, age } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings screen</Text>
      <Text style={styles.text}>Special: {special}</Text>
      <Text style={styles.text}>Age: {age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});
