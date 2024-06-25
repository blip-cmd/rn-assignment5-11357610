// import { StatusBar } from 'expo-status-bar';
// import { Text, View } from 'react-native';
import HomeScreen from './src/HomeScreen.js';
import SettingsScreen from './src/SettingsScreen.js';
// import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function App() {
  // const msg = "Welcome"

  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   ,
// });
