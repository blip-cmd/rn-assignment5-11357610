import React from 'react';
import { View, SafeAreaView, StyleSheet, Text } from 'react-native';

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.biggieBag}>
            <Text>Welcome to the Homescreen</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    biggieBag: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

