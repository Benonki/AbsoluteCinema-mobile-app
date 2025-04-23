import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity, ImageBackground} from 'react-native';
import { Snackbar } from 'react-native-paper';
import styles from './StyleSheet';
import data from '../../../db.json';

const RejestracjaScreen = ({ navigation }) => {
    const [login, setLogin] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [conditionConf, setConditionConf] = useState(false);
    const [snackbarVisible, setSnackbarVisible] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const handleRegister = () => {
        if (!login || !password || !confirmPassword || !name) {
            setSnackbarMessage('Proszę wypełnić wszystkie pola');
            setSnackbarVisible(true);
            return;
        }
        if (!conditionConf) {
            setSnackbarMessage('Proszę zaakceptowac warunki umowy');
            setSnackbarVisible(true);
            return;
        }
        if (!(password === confirmPassword)) {
            setSnackbarMessage('Hasła sie nie zgadzają');
            setSnackbarVisible(true);
            return;
        }

        const userExists = data.users.some(user => user.login === login);
        if (userExists) {
            setSnackbarMessage('Użytkownik o podanym loginie już istnieje');
            setSnackbarVisible(true);
            return;
        }

        const newUser = {
            id: data.users.length + 1,
            login,
            password,
            name,
        };

        data.users.push(newUser);
        navigation.navigate('Logowanie');
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

                <Text style={styles.label}>Powtórz Hasło</Text>
                <TextInput
                    style={styles.input}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry
                    placeholder="Powtórz hasło"
                    placeholderTextColor="#999"
                />

                <Text style={styles.label}>Imię</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                    placeholder="Wprowadź imię"
                    placeholderTextColor="#999"
                />

                <View style={styles.checkboxContainer}>
                    <Text style={styles.checkboxLabel}>Akceptuje warunki umowy</Text>
                    <TouchableOpacity
                        style={[styles.checkbox, conditionConf && styles.checkboxChecked]}
                        onPress={() => setConditionConf(!conditionConf)}
                    >
                        {conditionConf && <Text style={styles.checkboxTick}>✔</Text>}
                    </TouchableOpacity>
                </View>

                <View style={styles.registerContainer}>
                    <Text style={styles.registerText}>Masz już konto?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Logowanie')}>
                        <Text style={styles.registerLink}> Zaloguj się</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.button} onPress={handleRegister}>
                    <Text style={styles.buttonText}>Zarejestruj się</Text>
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

export default RejestracjaScreen;