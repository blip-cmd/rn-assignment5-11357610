import React from 'react';
import { View, SafeAreaView, Text} from 'react-native';
import Styles from './styles.js';

export default function HomeScreen() {
    return (
        <View style={Styles.biggieBag}>
            <Text>Welcome to the Homescreen</Text>
        </View>
    );
}
