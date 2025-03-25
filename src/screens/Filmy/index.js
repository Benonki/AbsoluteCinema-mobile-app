import React from "react";
import { Text, View } from "react-native";
import styles from './StyleSheet.js';

const FilmyScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 40 }}>Filmy</Text>
        </View>
    );
}

export default FilmyScreen;