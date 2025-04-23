import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, TouchableOpacity, Image, TextInput } from "react-native";
import { Feather } from '@expo/vector-icons';
import styles from './StyleSheet.js';
import db from '../../../db.json';

const SerialScreen = ({ navigation }) => {
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const top5Series = db.ranking.top_series
        .map(item => db.series.find(serie => serie.id === item.SeriesId))
        .filter(serie => serie);

    useEffect(() => {
        if (searchQuery.trim()) {
            const results = db.series.filter(serie =>
                serie.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setSearchResults(results);
        } else {
            setSearchResults([]);
        }
    }, [searchQuery]);

    const toggleSearch = () => {
        setIsSearchVisible(!isSearchVisible);
        if (isSearchVisible) {
            setSearchQuery("");
        }
    };

    return (
        <View style={[styles.container, { backgroundColor: '#F9F8EB' }]}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Top 5 Seriali</Text>
                <TouchableOpacity onPress={toggleSearch} style={styles.searchIcon}>
                    <Feather name="search" size={24} color="black" />
                </TouchableOpacity>
            </View>

            {isSearchVisible && (
                <View style={styles.searchBarContainer}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Szukaj seriali..."
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                        autoFocus
                    />
                </View>
            )}

            {isSearchVisible && (
                <View style={styles.searchResults}>
                    <ScrollView>
                        {searchResults.length > 0 ? (
                            searchResults.map((serie) => (
                                <TouchableOpacity
                                    key={serie.id}
                                    style={styles.searchResultItem}
                                    onPress={() => {
                                        navigation.navigate('Opis', { item: serie, type: 'series' });
                                        setIsSearchVisible(false);
                                        setSearchQuery("");
                                    }}
                                >
                                    <Image
                                        source={{ uri: serie.photoSeries }}
                                        style={styles.searchResultImage}
                                    />
                                    <View style={styles.searchResultTextContainer}>
                                        <Text style={styles.searchResultTitle}>{serie.title}</Text>
                                        <Text style={styles.searchResultYear}>
                                            Rok produkcji: {serie.release_year || 'N/A'}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            ))
                        ) : (
                            <Text style={styles.noResultsText}>Brak wyników</Text>
                        )}
                    </ScrollView>
                </View>
            )}

            {!isSearchVisible && (
                <>
                    <ScrollView horizontal={true} style={styles.horizontalScroll}>
                        {top5Series.map((series, index) => (
                            <TouchableOpacity
                                key={series?.id || index}
                                style={styles.seriesCard}
                                onPress={() => navigation.navigate('Opis', { item: series, type: 'series' })}
                            >
                                <Image
                                    source={{ uri: series?.photoSeries }}
                                    style={styles.seriesImage}
                                />
                                <View style={styles.rankingNumber}>
                                    <Text style={{ color: '#F9F8EB', fontSize: 24, fontWeight: 'bold' }}>{index + 1}</Text>
                                </View>
                                <Text style={styles.seriesTitle}>{series?.title || 'Unknown Title'}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>

                    <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 15, marginTop: 25 }}>Wszystkie Seriale</Text>
                    <ScrollView horizontal={true} style={styles.horizontalScroll}>
                        {db.series.map(serie => (
                            <TouchableOpacity
                                key={serie.id}
                                style={styles.seriesCard}
                                onPress={() => navigation.navigate('Opis', { item: serie, type: 'series' })}
                            >
                                <Image
                                    source={{ uri: serie.photoSeries }}
                                    style={styles.seriesImage}
                                />
                                <Text style={styles.seriesTitle}>{serie.title}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </>
            )}
        </View>
    );
}

export default SerialScreen;