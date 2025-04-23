import React, { useState, useEffect, useContext } from "react";
import { View, TouchableOpacity, FlatList, Image } from "react-native";
import { Text, Snackbar } from "react-native-paper";
import styles from './StyleSheet';
import db from '../../../db.json';
import { UserContext } from '../../context/UserContext';

const UlubioneScreen = ({ navigation }) => {
    const { user, setUser } = useContext(UserContext);
    const [watchlistData, setWatchlistData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [snackbarVisible, setSnackbarVisible] = useState(false);
    const [removedItem, setRemovedItem] = useState(null);

    useEffect(() => {
        loadWatchlistData();
    }, [user?.watchlist]);

    const loadWatchlistData = () => {
        setLoading(true);

        if (!user?.watchlist || user.watchlist.length === 0) {
            setWatchlistData([]);
            setLoading(false);
            return;
        }

        const currentWatchlist = user.watchlist.map(id => {
            if (id >= 200) {
                return db.series.find(s => s.id === id);
            } else {
                return db.movies.find(m => m.id === id);
            }
        }).filter(Boolean);

        setWatchlistData(currentWatchlist);
        setLoading(false);
    };

    const removeFromWatchlist = (id) => {
        const itemToRemove = watchlistData.find(item => item.id === id);
        setRemovedItem(itemToRemove);

        const updatedWatchlist = user.watchlist.filter(itemId => itemId !== id);
        setUser({ ...user, watchlist: updatedWatchlist });

        setSnackbarVisible(true);
    };

    const undoRemove = () => {
        if (removedItem) {
            const updatedWatchlist = [...user.watchlist, removedItem.id];
            setUser({ ...user, watchlist: updatedWatchlist });
            setRemovedItem(null);
            setSnackbarVisible(false);
        }
    };

    const renderItem = ({ item }) => {
        const imageUrl = item.photoMovie || item.photoSeries;
        const type = item.photoMovie ? 'movie' : 'series';

        return (
            <View style={styles.itemWrapper}>
                <TouchableOpacity
                    style={styles.itemContainer}
                    onPress={() => navigation.navigate('Opis', { item, type })}
                >
                    <TouchableOpacity
                        style={styles.removeButton}
                        onPress={(e) => {
                            e.stopPropagation();
                            removeFromWatchlist(item.id);
                        }}
                    >
                        <Text style={styles.removeButtonText}>−</Text>
                    </TouchableOpacity>

                    <Image
                        source={{ uri: imageUrl }}
                        style={styles.poster}
                    />

                    <View style={styles.itemDetails}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.info}>Rok produkcji: {item.release_year}</Text>
                        <Text style={styles.info}>Reżyser: {item.director?.join(', ') || 'Nieznany'}</Text>
                        <Text style={styles.info}>Aktorzy:</Text>
                        {item.actors?.slice(0, 2).map(actor => (
                            <Text key={actor.id} style={styles.actor}>• {actor.name}</Text>
                        ))}
                        {item.actors?.length > 2 && <Text style={styles.actor}>...</Text>}
                        <View style={styles.ratingContainer}>
                            <Text style={styles.rating}>★ {item.rating.toFixed(1)}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.divider} />
            </View>
        );
    };

    return (
        <View style={styles.container}>
            {loading ? (
                <View style={styles.loadingContainer}>
                    <Text>Ładowanie...</Text>
                </View>
            ) : watchlistData.length > 0 ? (
                <FlatList
                    data={watchlistData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={styles.listContainer}
                />
            ) : (
                <View style={styles.emptyContainer}>
                    <Text style={styles.emptyText}>Twoja lista obserwowanych jest pusta</Text>
                </View>
            )}

            <Snackbar
                visible={snackbarVisible}
                onDismiss={() => setSnackbarVisible(false)}
                duration={3000}
                action={{
                    label: 'Cofnij',
                    onPress: undoRemove,
                }}
                style={styles.snackbar}
            >
                Usunięto z listy obserwowanych
            </Snackbar>
        </View>
    );
};

export default UlubioneScreen;