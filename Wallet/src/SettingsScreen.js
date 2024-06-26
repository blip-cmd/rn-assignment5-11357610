import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, Switch, TouchableOpacity } from 'react-native';

function SettingsScreen() {
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Settings</Text>
            </View>
            <View style={styles.content}>
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.itemText}>Language</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.itemText}>My Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.itemText}>Contact Us</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.itemText}>Change Password</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.itemText}>Privacy Policy</Text>
                </TouchableOpacity>
                <View style={styles.themeItem}>
          <Text style={[styles.itemText, { fontWeight: "bold" }]}>Theme</Text>

                    <Switch></Switch>
                     {/* toHandle Switch */}
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        padding: 25,
        alignItems: "center",
    },
    headerText: {
        fontSize: 18,
        fontWeight: "bold",

    },
    content: {
        padding: 16,
    },
    item: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    itemText: {
        fontSize: 16,
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
