// import { StatusBar } from 'expo-status-bar';
// import { Text, View } from 'react-native';
import HomeScreen from './src/HomeScreen.js';
import SettingsScreen from './src/SettingsScreen.js';
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  // const msg = "Welcome"

  return (
    <NavigationContainer>
    <Tab.Navigator screenOptions={{
      tabBarShowLabel: true,
      tabBarLabelPosition: 'below-icon',
      tabBarStyle:{
        backgroundColor: 'white',
        height: 57,
        paddingBottom: 7,
      },
      tabBarAvtiveTintColor: 'blue',
      tabBarInactiveTintColor: 'grey',
      headerShown: false,
    }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="home-outline" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="settings-outline" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   ,
// });
