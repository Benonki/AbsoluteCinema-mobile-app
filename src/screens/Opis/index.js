import React from "react";
import { Text, View, Image, ScrollView, StyleSheet } from "react-native";
import styles from './StyleSheet.js';

const OpisScreen = ({ route }) => {
    const { item, type } = route.params || {};

    if (!item) {
        return (
            <View style={[styles.container, { backgroundColor: '#F9F8EB', padding: 15 }]}>
                <Text style={{ fontSize: 20 }}>Brak danych</Text>
            </View>
        );
    }

    const isSeries = type === 'series';
    const imageUrl = isSeries ? item.photoSeries : item.photoMovie;

    return (
        <View style={[styles.container, { backgroundColor: '#F9F8EB', padding: 15 }]}>
            <ScrollView>
                <Image
                    source={{ uri: imageUrl }}
                    style={{ width: '100%', height: 400, borderRadius: 10 }}
                />
                <Text style={{ fontSize: 28, fontWeight: 'bold', marginTop: 15 }}>{item.title}</Text>
                <Text style={{ fontSize: 16, marginTop: 5 }}>Gatunek: {item.genre?.join(', ') || 'Nieznany'}</Text>
                <Text style={{ fontSize: 16 }}>Rok produkcji: {item.release_year || 'Nieznany'}</Text>

                {isSeries && (
                    <Text style={{ fontSize: 16 }}>Liczba sezonów: {item.seasons || 'Nieznana'}</Text>
                )}

                <Text style={{ fontSize: 16 }}>Reżyser: {item.director?.join(', ') || 'Nieznany'}</Text>
                <Text style={{ fontSize: 16 }}>Scenariusz: {item.scenario?.join(', ') || 'Nieznany'}</Text>
                <Text style={{ fontSize: 16 }}>Produkcja: {item.production?.join(', ') || 'Nieznany'}</Text>
                <Text style={{ fontSize: 16, marginTop: 10 }}>Ocena: {item.rating || 'Nieznana'}/10</Text>
                <Text style={{ fontSize: 16, marginTop: 15 }}>{item.description || 'Brak opisu'}</Text>

                {item.actors?.length > 0 && (
                    <>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20 }}>Aktorzy:</Text>
                        {item.actors.map(actor => (
                            <View key={actor.id} style={{ marginTop: 10 }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{actor.name}</Text>
                                <Text style={{ fontSize: 14 }}>Rola: {actor.characterName}</Text>
                                <Text style={{ fontSize: 14 }}>xd: {actor.actorPhoto}</Text>
                            </View>
                        ))}
                    </>
                )}
            </ScrollView>
        </View>
    );
}

export default OpisScreen;