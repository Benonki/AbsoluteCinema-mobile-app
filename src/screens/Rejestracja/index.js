import React from "react";
import { Text, View } from "react-native";
import styles from './StyleSheet.js';

const RejestracjaScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 40 }}>Rejestracja</Text>
        </View>
    );
}

export default RejestracjaScreen;