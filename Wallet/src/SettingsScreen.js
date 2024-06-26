import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, Switch, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useTheme } from './ThemeContext';

function SettingsScreen() {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDarkTheme ? '#000' : '#fff' }]}>
      <View style={styles.header}>
        <Text style={[styles.headerText, { color: isDarkTheme ? '#fff' : '#000' }]}>Settings</Text>
      </View>
      <View style={styles.content}>
        <TouchableOpacity style={styles.item}>
          <Text style={[styles.itemText, { color: isDarkTheme ? '#fff' : '#000' }]}>Language</Text>
          <Ionicons name="chevron-forward-outline" size={21} style={{ color: isDarkTheme ? '#ccc' : '#7E848D' }} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={[styles.itemText, { color: isDarkTheme ? '#fff' : '#000' }]}>My Profile</Text>
          <Ionicons name="chevron-forward-outline" size={21} style={{ color: isDarkTheme ? '#ccc' : '#7E848D' }} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={[styles.itemText, { color: isDarkTheme ? '#fff' : '#000' }]}>Contact Us</Text>
          <Ionicons name="chevron-forward-outline" size={21} style={{ color: isDarkTheme ? '#ccc' : '#7E848D' }} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={[styles.itemText, { color: isDarkTheme ? '#fff' : '#000' }]}>Change Password</Text>
          <Ionicons name="chevron-forward-outline" size={21} style={{ color: isDarkTheme ? '#ccc' : '#7E848D' }} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={[styles.itemText, { color: isDarkTheme ? '#fff' : '#000' }]}>Privacy Policy</Text>
          <Ionicons name="chevron-forward-outline" size={21} style={{ color: isDarkTheme ? '#ccc' : '#7E848D' }} />
        </TouchableOpacity>
        <View style={styles.themeItem}>
          <Text style={[styles.itemText, { fontWeight: "bold", fontSize: 27, margin: 10, color: isDarkTheme ? '#fff' : '#000' }]}>Theme</Text>
          <Switch value={isDarkTheme} onValueChange={toggleTheme} 
          trackColor={{false: '#A2A2A7', true: '#1CE830'}}
          thumbColor='#FFFFFF'
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 25,
    alignItems: "center",
    margin: 40,
  },
  headerText: {
    fontSize: 30,
  },
  content: {
    padding: 16,
  },
  item: {
    paddingTop: 25,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemText: {
    fontSize: 17.5,
  },
  themeItem: {
    paddingTop: 30,
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default SettingsScreen;
