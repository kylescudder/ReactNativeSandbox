import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import Content from './components/Content'
import styles from './components/Styles'

export default function App() {
  let x = 1;
  console.log("App executed");
  return (
    // <NavigationContainer>
       <View style={styles.container}>
        <Content />
        <StatusBar style="auto" />
       </View>
    // </NavigationContainer>
  );
}