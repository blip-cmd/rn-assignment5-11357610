import React from 'react';
import { View, SafeAreaView, StyleSheet, Text } from 'react-native';

function SettingsScreen() {
    return (
        <View style={styles.biggieBag}>
            <Text>Welcome to the Settings Screen</Text>
        </View>
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

export default SettingsScreen;
