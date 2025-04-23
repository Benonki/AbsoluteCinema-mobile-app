import React, { useState, useContext, useEffect } from 'react';
import {View, Text, TextInput, TouchableOpacity, ImageBackground} from 'react-native';
import { Snackbar } from 'react-native-paper';
import styles from './StyleSheet';
import { UserContext } from '../../context/UserContext';
import data from '../../../db.json';
import * as SecureStore from 'expo-secure-store';

const LoginScreen = ({ navigation }) => {
    const { setUser } = useContext(UserContext);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [autoLogin, setAutoLogin] = useState(false);
    const [snackbarVisible, setSnackbarVisible] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    useEffect(() => {
        const checkAutoLogin = async () => {
            try {
                const savedLogin = await SecureStore.getItemAsync('autoLoginUser');
                if (savedLogin) {
                    const user = data.users.find(u => u.login === savedLogin);
                    if (user) {
                        setUser(user);
                        navigation.navigate('TabNav');
                    }
                }
            } catch (error) {
                console.error('Błąd podczas odczytywania danych autologowania:', error);
            }
        };

        checkAutoLogin();
    }, []);

    const handleLogin = async () => {
        if (!login || !password) {
            setSnackbarMessage('Proszę podać login i hasło');
            setSnackbarVisible(true);
            return;
        }
        const user = data.users.find(u => u.login === login && u.password === password);

        if (user) {
            setUser(user);

            if (autoLogin) {
                try {
                    await SecureStore.setItemAsync('autoLoginUser', login);
                } catch (error) {
                    console.error('Błąd podczas zapisywania danych autologowania:', error);
                }
            } else {
                try {
                    await SecureStore.deleteItemAsync('autoLoginUser');
                } catch (error) {
                    console.error('Błąd podczas usuwania danych autologowania:', error);
                }
            }

            navigation.navigate('TabNav');
        } else {
            setSnackbarMessage('Nieprawidłowy login lub hasło');
            setSnackbarVisible(true);
        }
    };

    return (
        <ImageBackground
            source={require('../../../assets/tlo.png')}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.container}>
                <Text style={styles.label}>Login</Text>
                <TextInput
                    style={styles.input}
                    value={login}
                    onChangeText={setLogin}
                    placeholder="Wprowadź login"
                    placeholderTextColor="#999"
                />

                <Text style={styles.label}>Hasło</Text>
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    placeholder="Wprowadź hasło"
                    placeholderTextColor="#999"
                />

                <View style={styles.checkboxContainer}>
                    <Text style={styles.checkboxLabel}>Automatyczne Logowanie</Text>
                    <TouchableOpacity
                        style={[styles.checkbox, autoLogin && styles.checkboxChecked]}
                        onPress={() => setAutoLogin(!autoLogin)}
                    >
                        {autoLogin && <Text style={styles.checkboxTick}>✔</Text>}
                    </TouchableOpacity>
                </View>

                <View style={styles.registerContainer}>
                    <Text style={styles.registerText}>Pierwszy raz?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Rejestracja')}>
                        <Text style={styles.registerLink}> Zarejestruj się</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Zaloguj się</Text>
                </TouchableOpacity>

                <Snackbar
                    visible={snackbarVisible}
                    onDismiss={() => setSnackbarVisible(false)}
                    duration={3000}
                    style={{
                        backgroundColor: '#5E5A5A',
                        borderRadius: 20,
                    }}
                    wrapperStyle={{
                        alignItems: 'center',
                        left: 15,
                    }}
                    theme={{
                        colors: {
                            surface: '#FFFFFF',
                        }
                    }}
                >
                    {snackbarMessage}
                </Snackbar>
            </View>
        </ImageBackground>
    );
};

export default LoginScreen;