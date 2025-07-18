import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback>
        <Text onPress={() => {
          Alert.alert('Hello', 'Welcome to the Primera App!');
        }}>Open up App.js to start working on your app!</Text>

      </TouchableNativeFeedback>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
