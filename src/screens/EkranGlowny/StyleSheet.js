import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#F9F8EB",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 10,
    paddingBottom: 10,
    color: '#333',
  },
  horizontalScroll: {
    paddingLeft: 15,
    marginTop: 10,
  },
  movieCard: {
    width: 200,
    marginRight: 15,
    marginBottom: 20,
  },
  movieImage: {
    width: 150,
    height: 225,
    borderRadius: 10,
  },
  movieTitle: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  rankingNumber: {
    position: 'absolute',
    bottom: 60,
    left: 10,
    backgroundColor: 'rgba(0,0,0,0.7)',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardLarge: {
    flexDirection: "column",
    backgroundColor: "#5E5A5A",
    marginBottom: 20,
    borderRadius: 8,
    overflow: "hidden",
  },
  largeImage: {
    width: "100%",
    height: 180,
  },
  textContainerLarge: {
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleLarge: {
    color: "#F9F8EB",
    fontSize: 18,
    flex: 1,
    flexWrap: "wrap",
  },
  commentBox: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  commentCount: {
    color: "#F9F8EB",
    marginLeft: 6,
    fontSize: 16,
  },
  trailerCard: {
    width: 200,
    marginRight: 15,
    marginBottom: 10,
    position: 'relative',
  },
  trailerImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
  },
  trailerTitle: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  playButton: {
    position: 'absolute',
    top: '40%',
    left: '40%',
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 10,
    borderRadius: 50,
  },
});