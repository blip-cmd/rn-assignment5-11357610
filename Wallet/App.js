import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import HomeScreen from "./src/HomeScreen";
import SettingsScreen from "./src/SettingsScreen";
import { ThemeProvider, useTheme } from "./src/ThemeContext";

const Tab = createBottomTabNavigator();

function MyTabs() {
  const { isDarkTheme, colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: true,
        tabBarLabelPosition: "below-icon",
        tabBarStyle: {
          backgroundColor: isDarkTheme ? "#000" : "white",
          height: 57,
          paddingBottom: 7,
        },
        tabBarActiveTintColor: colors.activeTintColor,
        tabBarInactiveTintColor: colors.inactiveTintColor,
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home-outline";
          } else if (route.name === "Settings") {
            iconName = "settings-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </ThemeProvider>
  );
}
