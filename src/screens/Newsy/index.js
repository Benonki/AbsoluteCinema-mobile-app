import React from "react";
import { Text, View } from "react-native";
import styles from './StyleSheet.js';

const ProfilScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 40 }}>Profil</Text>
        </View>
    );
}

export default ProfilScreen;