import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { FontAwesome, Feather } from '@expo/vector-icons';
import styles from "./StyleSheet";
import db from "../../../db.json";

const NewsyScreen = ({ navigation }) => {
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const newsData = db.news;

    useEffect(() => {
        if (searchQuery.trim()) {
            const results = newsData.filter(news =>
                news.title.toLowerCase().includes(searchQuery.toLowerCase())
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
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Aktualności</Text>
                <TouchableOpacity onPress={toggleSearch} style={styles.searchIcon}>
                    <Feather name="search" size={24} color="black" />
                </TouchableOpacity>
            </View>

            {isSearchVisible && (
                <View style={styles.searchBarContainer}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Szukaj newsów..."
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                        autoFocus
                    />
                </View>
            )}

            {isSearchVisible ? (
                <View style={styles.searchResults}>
                    <ScrollView>
                        {searchResults.length > 0 ? (
                            searchResults.map((news) => (
                                <TouchableOpacity
                                    key={news.id}
                                    style={styles.searchResultItem}
                                    onPress={() => {
                                        navigation.navigate("News", { newsId: news.id });
                                        setIsSearchVisible(false);
                                        setSearchQuery("");
                                    }}
                                >
                                    <Image
                                        source={{ uri: news.photoNews }}
                                        style={styles.searchResultImage}
                                    />
                                    <View style={styles.searchResultTextContainer}>
                                        <Text style={styles.searchResultTitle}>{news.title}</Text>
                                    </View>
                                </TouchableOpacity>
                            ))
                        ) : (
                            <Text style={styles.noResultsText}>Brak wyników</Text>
                        )}
                    </ScrollView>
                </View>
            ) : (
                <ScrollView showsVerticalScrollIndicator={true}>
                    {newsData.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            style={styles.cardLarge}
                            onPress={() => navigation.navigate("News", { newsId: item.id })}
                        >
                            <Image source={{ uri: item.photoNews }} style={styles.largeImage} />
                            <View style={styles.textContainerLarge}>
                                <Text style={styles.titleLarge}>{item.title}</Text>
                                <View style={styles.commentBox}>
                                    <FontAwesome name="commenting-o" size={20} color="#F9F8EB" />
                                    <Text style={styles.commentCount}>{item.comments.length}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            )}
        </View>
    );
};

export default NewsyScreen;