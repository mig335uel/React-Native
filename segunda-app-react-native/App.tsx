import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import AppBar from './src/components/AppBar';
import Login from './src/components/UI/Login';
import Home from './src/components/UI/Home';


export default function App() {
  return (
    <>
        <StatusBar style="light" />
        <AppBar />
      <View style={styles.container}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Home />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    color: '#333333',
  }
  
});
