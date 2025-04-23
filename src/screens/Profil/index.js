import React, { useState, useContext } from "react";
import {Text, View, TextInput, TouchableOpacity, Image, Alert} from "react-native";
import styles from './StyleSheet.js';
import { UserContext } from '../../context/UserContext';
import { Snackbar } from 'react-native-paper';
import {CommonActions} from "@react-navigation/native";
import * as SecureStore from "expo-secure-store";
import * as ImagePicker from 'expo-image-picker';

const ProfileScreen = ({ navigation }) => {
    const { user, setUser } = useContext(UserContext);

    const [name, setName] = useState(user.name);
    const [password, setPassword] = useState(user.password);
    const [snackbarVisible, setSnackbarVisible] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const handleSaveChanges = () => {
        setUser({ ...user, name, password });
        setSnackbarMessage('Zmiany zostaly zapisane');
        setSnackbarVisible(true);
    };

    const handleLogout = async () => {
        try {
            await SecureStore.deleteItemAsync('autoLoginUser');
        } catch (error) {
            console.error('Błąd podczas usuwania danych autologowania:', error);
        }
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: 'Logowanie' }],
            })
        );
    };

    const handleImagePress = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Brak uprawnień', 'Potrzebujemy uprawnień do dostępu do Twojej galerii.');
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            setUser({ ...user, photoUser: result.assets[0].uri });
            setSnackbarMessage('Zdjęcie profilowe zostało zmienione');
            setSnackbarVisible(true);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <View style={styles.statsRow}>
                    <View style={styles.statItem}>
                        <Text style={styles.statLabel}>Login:</Text>
                     <Text style={styles.statValue}>{user.login}</Text>
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.statLabel}>Ilość recenzji</Text>
                        <Text style={styles.statValue}>{user.numberOfOpinions}</Text>
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.statLabel}>Filmy ulubione</Text>
                        <Text style={styles.statValue}>{user.watchlist ? user.watchlist.length : 0}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.middleSection}>
                <View style={styles.inputsContainer}>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Imię</Text>
                        <TextInput
                            style={styles.input}
                            value={name}
                            onChangeText={setName}
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Hasło</Text>
                        <TextInput
                            style={styles.input}
                            value={password}
                            onChangeText={setPassword}
                        />
                    </View>
                </View>

                <TouchableOpacity
                    style={styles.profileImageContainer}
                    onPress={handleImagePress}
                >
                    <Image
                        source={{ uri: user.photoUser }}
                        style={styles.profileImage}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleSaveChanges}>
                    <Text style={styles.buttonText}>Zapisz zmiany</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleLogout}>
                    <Text style={styles.buttonText}>Wyloguj się</Text>
                </TouchableOpacity>
            </View>
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
                    top: 500,
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
    );
};

export default ProfileScreen;