import React, { useState, useEffect, useContext } from "react";
import { Text, View, Image, ScrollView, TouchableOpacity, Modal, TextInput } from "react-native";
import styles from './StyleSheet.js';
import db from "../../../db.json";
import { Snackbar } from 'react-native-paper';
import { UserContext } from "../../context/UserContext";
import Icon from 'react-native-vector-icons/FontAwesome';

const OpisScreen = ({ route }) => {
    const { user, setUser } = useContext(UserContext);
    const { item: initialItem, type } = route.params;
    const [item, setItem] = useState(initialItem);
    const [loading, setLoading] = useState(!initialItem);
    const [modalVisible, setModalVisible] = useState(false);
    const [reviewText, setReviewText] = useState("");
    const [stars, setStars] = useState(0);
    const [isInWatchlist, setIsInWatchlist] = useState(false);
    const [snackbarVisible, setSnackbarVisible] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');


    useEffect(() => {
        if (!initialItem) return;

        const fetchData = () => {
            try {
                const data = type === 'series' ? db.series : db.movies;
                const foundItem = data.find(production =>
                    production.title.toLowerCase() === initialItem.title.toLowerCase()
                );

                setItem(foundItem || initialItem);

                if (user && user.watchlist) {
                    setIsInWatchlist(user.watchlist.includes(item.id));
                }

            } catch (error) {
                console.error("Error fetching data:", error);
                setItem(initialItem);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [initialItem, type, user]);

    const handleAddReview = () => {
        if (!user) {
            alert("Musisz być zalogowany, aby dodać recenzję.");
            return;
        }
        setModalVisible(true);
    };

    const handleSubmitReview = () => {
        if (!user || stars === 0) {
            alert("Proszę ocenić produkcję (1-5 gwiazdek).");
            return;
        }

        const newReview = {
            id: Math.random().toString(36).substr(2, 9),
            userName: user.name,
            userPhoto: user.photoUser,
            description: reviewText,
            stars: stars,
        };

        const updatedItem = {
            ...item,
            reviews: [...(item.reviews || []), newReview]
        };

        setItem(updatedItem);
        setReviewText("");
        setStars(0);
        setModalVisible(false);
    };

    const handleAddToWatchlist = () => {
        if (!user) {
            alert("Musisz być zalogowany, aby dodać do listy obserwowanych.");
            return;
        }

        if (user.watchlist?.includes(item.id)) {
            alert("Ta produkcja jest już na liście obserwowanych.");
            return;
        }

        const updatedUser = {
            ...user,
            watchlist: [...(user.watchlist || []), item.id]
        };

        setUser(updatedUser);
        setIsInWatchlist(true);
        setSnackbarMessage("Dodano do ulubionych ❤");
        setSnackbarVisible(true);
    };

    const handleRemoveFromWatchlist = () => {
        const updatedUser = {
            ...user,
            watchlist: user.watchlist.filter(prodId => prodId !== item.id)
        };

        setUser(updatedUser);
        setIsInWatchlist(false);
        setSnackbarMessage("Usunięto z ulubionych 💔");
        setSnackbarVisible(true);
    };


    if (loading) {
        return (
            <View style={styles.container}>
                <Text style={styles.loadingText}>Ładowanie danych...</Text>
            </View>
        );
    }

    if (!item) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>Nie znaleziono produkcji</Text>
            </View>
        );
    }

    const imageUrl = type === 'series' ? item.photoSeries : item.photoMovie;

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.topSection}>
                    <Image
                        source={{ uri: imageUrl }}
                        style={styles.poster}
                        resizeMode="contain"
                    />
                    <View style={styles.basicInfo}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.infoText}>
                            <Text style={styles.infoLabel}>Gatunek: </Text>
                            {item.genre?.join(', ') || 'Nieznany'}
                        </Text>
                        <Text style={styles.infoText}>
                            <Text style={styles.infoLabel}>Rok produkcji: </Text>
                            {item.release_year || 'Nieznany'}
                        </Text>
                        {type === 'series' && (
                            <Text style={styles.infoText}>
                                <Text style={styles.infoLabel}>Liczba sezonów: </Text>
                                {item.seasons || 'Nieznana'}
                            </Text>
                        )}
                        <Text style={styles.infoText}>
                            <Text style={styles.infoLabel}>Reżyser: </Text>
                            {item.director?.join(', ') || 'Nieznany'}
                        </Text>
                        <Text style={styles.infoText}>
                            <Text style={styles.infoLabel}>Scenariusz: </Text>
                            {item.scenario?.join(', ') || 'Nieznany'}
                        </Text>
                        <Text style={styles.infoText}>
                            <Text style={styles.infoLabel}>Produkcja: </Text>
                            {item.production?.join(', ') || 'Nieznana'}
                        </Text>
                        <View style={styles.ratingContainer}>
                            <Text style={styles.rating}>★ {item.rating.toFixed(1)}/10</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Opis</Text>
                    <Text style={styles.description}>
                        {item.description || 'Brak opisu'}
                    </Text>
                </View>

                {item.actors?.length > 0 && (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Obsada</Text>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={styles.castScroll}
                        >
                            {item.actors.map(actor => (
                                <View key={actor.id} style={styles.actorCard}>
                                    <Image
                                        source={{ uri: actor.actorPhoto }}
                                        style={styles.actorImage}
                                    />
                                    <Text style={styles.actorName} numberOfLines={1}>
                                        {actor.name}
                                    </Text>
                                    <Text style={styles.actorRole} numberOfLines={2}>
                                        {actor.characterName}
                                    </Text>
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                )}

                {item.reviews?.length > 0 ? (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Recenzje</Text>
                        {item.reviews.map(review => (
                            <View key={review.id} style={styles.reviewCard}>
                                <View style={styles.reviewHeader}>
                                    {review.userPhoto && (
                                        <Image
                                            source={{ uri: review.userPhoto }}
                                            style={styles.userImage}
                                        />
                                    )}
                                    <View style={styles.reviewUserInfo}>
                                        <Text style={styles.userName}>
                                            {review.userName || 'Anonim'}
                                        </Text>
                                        <Text style={styles.reviewRating}>
                                            {'★'.repeat(review.stars)}{'☆'.repeat(5 - review.stars)}
                                        </Text>
                                    </View>
                                </View>
                                <Text style={styles.reviewText}>
                                    {review.description}
                                </Text>
                            </View>
                        ))}
                    </View>
                ) : (
                    <Text style={styles.noReviews}>Brak recenzji</Text>
                )}
            </ScrollView>

            <View style={styles.bottomButtons}>
                <TouchableOpacity
                    style={styles.reviewButton}
                    onPress={handleAddReview}
                >
                    <Text style={styles.reviewButtonText}>Dodaj recenzję</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.heartButton}
                    onPress={isInWatchlist ? handleRemoveFromWatchlist : handleAddToWatchlist}
                    activeOpacity={0.6}
                >
                    <Icon
                        name={isInWatchlist ? "heart" : "heart-o"}
                        size={20}
                        color={isInWatchlist ? "red" : "gray"}
                    />
                </TouchableOpacity>
            </View>

            <Modal visible={modalVisible} animationType="slide" transparent>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalLabel}>Dodaj recenzję</Text>
                            <TouchableOpacity onPress={() => setModalVisible(false)}>
                                <Text style={styles.modalClose}>❌</Text>
                            </TouchableOpacity>
                        </View>

                        <Text style={{ marginTop: 10 }}>Ocena:</Text>
                        <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                            {[1, 2, 3, 4, 5].map((star) => (
                                <TouchableOpacity key={star} onPress={() => setStars(star)}>
                                    <Text style={{ fontSize: 30, color: star <= stars ? 'gold' : 'gray' }}>
                                        {star <= stars ? '★' : '☆'}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>

                        <TextInput
                            style={styles.textArea}
                            value={reviewText}
                            onChangeText={setReviewText}
                            multiline
                            maxLength={1000}
                            placeholder="Wpisz swoją recenzję..."
                        />
                        <Text style={styles.counter}>{reviewText.length}/1000</Text>

                        <TouchableOpacity style={styles.addButton} onPress={handleSubmitReview}>
                            <Text style={styles.addButtonText}>Dodaj recenzję</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Snackbar
                visible={snackbarVisible}
                onDismiss={() => setSnackbarVisible(false)}
                duration={2000}
                wrapperStyle={{
                    bottom: 65,
                }}
                style={{ backgroundColor: '#5E5A5A' }}
            >
                <Text style={{ textAlign: 'center', color: '#F9F8EB' }}>{snackbarMessage}</Text>
            </Snackbar>
        </View>
    );
};

export default OpisScreen;