import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About screen</Text>
      <Link href="/about/settings?special=arlin" style={styles.button}>
        Go to Settings screen - Arlin
      </Link>
      <Link
        href={{
          pathname: "/about/settings",
          params: { special: "arlin", age: 42 }
        }}
        style={styles.button}
      >
        Go to Settings screen - Arlin (new way)
      </Link>
      <Link href="/about/settings?special=craig" style={styles.button}>
        Go to Settings screen - Craig
      </Link>
      <Link href="/about/settings?special=mike" style={styles.button}>
        Go to Settings screen - Mike
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
