import React from "react";
import { Text, View, ScrollView, TouchableOpacity, Image, Linking } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import styles from './StyleSheet.js';
import db from '../../../db.json';

const EkranGlownyScreen = ({ navigation }) => {
    const top5Productions = db.ranking.top5
        .map(item => {
            if (item.ProductionId.toString().startsWith('1')) {
                return db.movies.find(movie => movie.id === item.ProductionId);
            } else {
                return db.series.find(series => series.id === item.ProductionId);
            }
        })
        .filter(item => item);

    const newestNews = [...db.news]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 2);

    const trailers = db.trailers;

    const getYouTubeThumbnail = (url) => {
        let videoId = '';

        // share
        if (url.includes('youtu.be/')) {
            videoId = url.split('youtu.be/')[1].split('?')[0];
        }
        // normal
        else if (url.includes('v=')) {
            videoId = url.split('v=')[1].split('&')[0];
        }
        // shorts
        else if (url.includes('shorts/')) {
            videoId = url.split('shorts/')[1].split('?')[0];
        }

        return `https://img.youtube.com/vi/${videoId}/0.jpg`;
    };

    const handleTrailerPress = (link) => {
        Linking.openURL(link).catch(err => console.error("Couldn't load page", err));
    };

    return (
        <View style={[styles.container, { backgroundColor: '#F9F8EB' }]}>
            <ScrollView>
                <Text style={styles.headerTitle}>Top 5 Produkcji</Text>
                <ScrollView horizontal={true} style={styles.horizontalScroll}>
                    {top5Productions.map((item, index) => (
                        <TouchableOpacity
                            key={item?.id || index}
                            style={styles.movieCard}
                            onPress={() => navigation.navigate('Opis', {
                                item: item,
                                type: item.id.toString().startsWith('1') ? 'movie' : 'series'
                            })}
                        >
                            <Image
                                source={{ uri: item?.photoMovie || item?.photoSeries }}
                                style={styles.movieImage}
                            />
                            <View style={styles.rankingNumber}>
                                <Text style={{ color: '#F9F8EB', fontSize: 24, fontWeight: 'bold' }}>{index + 1}</Text>
                            </View>
                            <Text style={styles.movieTitle}>{item?.title || 'Unknown Title'}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                <Text style={styles.headerTitle}>Gorące Newsy 🔥</Text>
                <View>
                    {newestNews.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            style={styles.cardLarge}
                            onPress={() => navigation.navigate("News", { newsId: item.id })}
                        >
                            <Image
                                source={{ uri: item.photoNews}}
                                style={[styles.largeImage, { height: 120 }]}
                            />
                            <View style={styles.textContainerLarge}>
                                <Text style={styles.titleLarge}>{item.title}</Text>
                                <View style={styles.commentBox}>
                                    <FontAwesome name="commenting-o" size={20} color="#F9F8EB" />
                                    <Text style={styles.commentCount}>{item.comments.length}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>

                <Text style={styles.headerTitle}>Najnowsze Zwiastuny</Text>
                <ScrollView horizontal={true} style={styles.horizontalScroll}>
                    {trailers.map((trailer) => (
                        <TouchableOpacity
                            key={trailer.id}
                            style={styles.trailerCard}
                            onPress={() => handleTrailerPress(trailer.link)}
                        >
                            <Image
                                source={{ uri: getYouTubeThumbnail(trailer.link) }}
                                style={styles.trailerImage}
                            />
                            <Text style={styles.trailerTitle}>{trailer.name}</Text>
                            <View style={styles.playButton}>
                                <FontAwesome name="play" size={24} color="#F9F8EB" />
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </ScrollView>
        </View>
    );
}

export default EkranGlownyScreen;