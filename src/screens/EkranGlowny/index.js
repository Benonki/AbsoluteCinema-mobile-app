import React from "react";
import { Text, View } from "react-native";
import styles from './StyleSheet.js';

const EkranGlownyScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 40 }}>Home wita</Text>
        </View>
    );
}

export default EkranGlownyScreen;