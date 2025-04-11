import React, { useContext } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from './StyleSheet.js';
import { UserContext } from "../../context/UserContext";
import data from '../../../db.json';


const LoginScreen = ({ navigation }) => {
    const { setUser } = useContext(UserContext);

    const handleLogin = () => {
        const firstUser = data.users[0];
        if (firstUser) {
            setUser(firstUser);
            navigation.navigate('TabNav');
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={handleLogin}
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