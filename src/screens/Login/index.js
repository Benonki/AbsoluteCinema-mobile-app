import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from './StyleSheet.js';

const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('TabNav')}
            >
                <Text style={styles.buttonText}>Przejdź do TabNav</Text>
            </TouchableOpacity>

            <View style={styles.registerContainer}>
                <Text style={styles.registerText}>Pierwszy raz? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Rejestracja')}>
                    <Text style={styles.registerLink}>Zarejestruj się</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default LoginScreen;
