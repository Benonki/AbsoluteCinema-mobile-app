import React, { useContext, useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, Modal, TextInput } from "react-native";
import styles from "./StyleSheet";
import db from "../../../db.json";
import { UserContext } from "../../context/UserContext";

const News = ({ route }) => {
    const { user } = useContext(UserContext);
    const { newsId } = route.params;
    const [commentText, setCommentText] = useState("");
    const [modalVisible, setModalVisible] = useState(false);

    const newsItem = db.news.find((n) => n.id === newsId);

    const handleAddComment = () => {
        setModalVisible(true);
    };

    const handleSubmitComment = () => {
        if (!user) {
            alert("Musisz być zalogowany, aby dodać komentarz.");
            return;
        }
        const newComment = {
            userName: user.name,
            userPhoto: user.photoUser,
            description: commentText,
        };

        const newsIndex = db.news.findIndex((n) => n.id === newsId);
        db.news[newsIndex].comments.push(newComment);

        setCommentText("");
        setModalVisible(false);
    };

    if (!newsItem) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>News nie znaleziony</Text>
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: newsItem.photoNews }} style={styles.newsImage} />
            <Text style={styles.topic}>Temat: {newsItem.title}</Text>
            <Text style={styles.description}>Opis: {newsItem.content}</Text>
            <Text style={styles.Date}>{newsItem.date}</Text>
            <Text style={styles.commentHeader}>Komentarze</Text>

            {newsItem.comments.length > 0 ? (
                newsItem.comments.map((comment, index) => (
                    <View key={index} style={styles.commentBox}>
                        <Image
                            source={
                                comment.userPhoto
                                    ? { uri: comment.userPhoto }
                                    : require("../../../assets/profil.png")
                            }
                            style={styles.avatar}
                        />
                        <View style={styles.commentContent}>
                            <Text style={styles.commentUser}>{comment.userName}</Text>
                            <Text style={styles.commentText}>{comment.description}</Text>
                        </View>
                    </View>
                ))
            ) : (
                <Text style={styles.noComments}>Brak komentarzy</Text>
            )}

            <TouchableOpacity style={styles.button} onPress={handleAddComment}>
                <Text style={styles.buttonText}>Dodaj Komentarz</Text>
            </TouchableOpacity>

            <Modal visible={modalVisible} animationType="slide" transparent>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalLabel}>Opis:</Text>
                            <TouchableOpacity onPress={() => setModalVisible(false)}>
                                <Text style={styles.modalClose}>❌</Text>
                            </TouchableOpacity>
                        </View>

                        <TextInput
                            style={styles.textArea}
                            value={commentText}
                            onChangeText={setCommentText}
                            multiline
                            maxLength={1000}
                            placeholder="Wpisz komentarz..."
                        />
                        <Text style={styles.counter}>{commentText.length}/1000</Text>

                        <TouchableOpacity style={styles.addButton} onPress={handleSubmitComment}>
                            <Text style={styles.addButtonText}>Dodaj</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    );
};

export default News;