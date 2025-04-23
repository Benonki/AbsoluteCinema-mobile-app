import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, FlatList, Image } from "react-native";
import styles from './StyleSheet';
import db from '../../../db.json';

const RankingScreen = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState("top5");
    const [loading, setLoading] = useState(true);
    const [rankingData, setRankingData] = useState([]);

    useEffect(() => {
        loadRankingData();
    }, [activeTab]);

    const loadRankingData = () => {
        setLoading(true);

        let currentRanking = [];

        if (activeTab === "top_movies") {
            currentRanking = db.ranking.top_movies.map(item => {
                const movie = db.movies.find(m => m.id === item.MovieId);
                return movie;
            });
        } else if (activeTab === "top_series") {
            currentRanking = db.ranking.top_series.map(item => {
                const series = db.series.find(s => s.id === item.SeriesId);
                return series;
            });
        } else {
            currentRanking = db.ranking.top5.map(item => {
                if (item.ProductionId >= 200) {
                    return db.series.find(s => s.id === item.ProductionId);
                } else {
                    return db.movies.find(m => m.id === item.ProductionId);
                }
            });
        }

        setRankingData(currentRanking.filter(item => item !== undefined));
        setLoading(false);
    };

    const renderItem = ({ item, index }) => {
        const imageUrl = item.photoMovie || item.photoSeries;
        const type = item.photoMovie ? 'movie' : 'series';

        return (
            <View style={styles.itemWrapper}>
                    <TouchableOpacity
                        style={styles.itemContainer}
                        onPress={() => navigation.navigate('Opis', { item, type })}
                    >
                        <Text style={[styles.rankNumber, index === 0 && styles.firstRankNumber]}>
                            {index + 1}
                        </Text>
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
            <View style={styles.tabContainer}>
                <TouchableOpacity
                    style={[
                        styles.tabButton,
                        activeTab === "top_movies" && styles.activeTabButton
                    ]}
                    onPress={() => setActiveTab("top_movies")}
                >
                    <Text style={styles.tabButtonText}>Filmy</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.tabButton,
                        activeTab === "top5" && styles.activeTabButton
                    ]}
                    onPress={() => setActiveTab("top5")}
                >
                    <Text style={styles.tabButtonText}>Ogółem</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.tabButton,
                        activeTab === "top_series" && styles.activeTabButton
                    ]}
                    onPress={() => setActiveTab("top_series")}
                >
                    <Text style={styles.tabButtonText}>Seriale</Text>
                </TouchableOpacity>
            </View>

            {loading ? (
                <View style={styles.loadingContainer}>
                    <Text>Ładowanie...</Text>
                </View>
            ) : (
                <FlatList
                    data={rankingData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={styles.listContainer}
                />
            )}
        </View>
    );
};

export default RankingScreen;