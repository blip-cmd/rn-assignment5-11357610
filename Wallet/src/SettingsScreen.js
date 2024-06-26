import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, Switch, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

function SettingsScreen() {
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Settings</Text>
            </View>
            <View style={styles.content}>
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.itemText}>Language</Text>
                    <Ionicons name="chevron-forward-outline" size={21} style={{ color:'#7E848D' }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.itemText}>My Profile</Text>
                    <Ionicons name="chevron-forward-outline" size={21} style={{ color:'#7E848D' }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.itemText}>Contact Us</Text>
                    <Ionicons name="chevron-forward-outline" size={21} style={{ color:'#7E848D' }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.itemText}>Change Password</Text>
                    <Ionicons name="chevron-forward-outline" size={21} style={{ color:'#7E848D' }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.itemText}>Privacy Policy</Text>
                    <Ionicons name="chevron-forward-outline" size={21} style={{ color:'#7E848D' }} />
                </TouchableOpacity>
                <View style={styles.themeItem}> 
          <Text style={[styles.itemText, { fontWeight: "bold", fontSize:27, margin:10 }]}>Theme</Text>

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
        paddingTop: 25,
        alignItems: "center",
        margin: 40,
    },
    headerText: {
        fontSize: 30,
        // fontWeight: "bold",

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
