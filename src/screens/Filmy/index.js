import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, TouchableOpacity, Image, TextInput } from "react-native";
import { Feather } from '@expo/vector-icons';
import styles from './StyleSheet.js';
import db from '../../../db.json';

const FilmyScreen = ({ navigation }) => {
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const top5Movies = db.ranking.top_movies
        .map(item => db.movies.find(movie => movie.id === item.MovieId))
        .filter(movie => movie);

    useEffect(() => {
        if (searchQuery.trim()) {
            const results = db.movies.filter(movie =>
                movie.title.toLowerCase().includes(searchQuery.toLowerCase())
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
                <Text style={styles.headerTitle}>Top 5 Filmów</Text>
                <TouchableOpacity onPress={toggleSearch} style={styles.searchIcon}>
                    <Feather name="search" size={24} color="black" />
                </TouchableOpacity>
            </View>

            {isSearchVisible && (
                <View style={styles.searchBarContainer}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Szukaj filmów..."
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
                            searchResults.map((movie) => (
                                <TouchableOpacity
                                    key={movie.id}
                                    style={styles.searchResultItem}
                                    onPress={() => {
                                        navigation.navigate('Opis', { item: movie, type: 'movie' });
                                        setIsSearchVisible(false);
                                        setSearchQuery("");
                                    }}
                                >
                                    <Image
                                        source={{ uri: movie.photoMovie }}
                                        style={styles.searchResultImage}
                                    />
                                    <View style={styles.searchResultTextContainer}>
                                        <Text style={styles.searchResultTitle}>{movie.title}</Text>
                                        <Text style={styles.searchResultYear}>
                                            Rok produkcji: {movie.release_year  || 'N/A'}
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
                        {top5Movies.map((movie, index) => (
                            <TouchableOpacity
                                key={movie?.id || index}
                                style={styles.movieCard}
                                onPress={() => navigation.navigate('Opis', { item: movie, type: 'movie' })}
                            >
                                <Image
                                    source={{ uri: movie?.photoMovie }}
                                    style={styles.movieImage}
                                />
                                <View style={styles.rankingNumber}>
                                    <Text style={{ color: '#F9F8EB', fontSize: 24, fontWeight: 'bold' }}>{index + 1}</Text>
                                </View>
                                <Text style={styles.movieTitle}>{movie?.title || 'Unknown Title'}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>

                    <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 15, marginTop: 25 }}>Wszystkie Filmy</Text>
                    <ScrollView horizontal={true} style={styles.horizontalScroll}>
                        {db.movies.map(movie => (
                            <TouchableOpacity
                                key={movie.id}
                                style={styles.movieCard}
                                onPress={() => navigation.navigate('Opis', { item: movie, type: 'movie' })}
                            >
                                <Image
                                    source={{ uri: movie.photoMovie }}
                                    style={styles.movieImage}
                                />
                                <Text style={styles.movieTitle}>{movie.title}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </>
            )}
        </View>
    );
}

export default FilmyScreen;