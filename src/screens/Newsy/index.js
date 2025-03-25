import React from "react";
import { Text, View } from "react-native";
import styles from './StyleSheet.js';

const NewsyScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 40 }}>Newsy</Text>
        </View>
    );
}

export default NewsyScreen;