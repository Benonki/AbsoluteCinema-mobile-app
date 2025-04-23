import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F8EB",
    paddingTop: 16,
  },
  listContainer: {
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
  itemWrapper: {
    marginBottom: 8,
  },
  itemContainer: {
    flexDirection: "row",
    backgroundColor: "#5E5A5A",
    borderRadius: 8,
    padding: 16,
    alignItems: "flex-start",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    marginLeft: 40,
  },
  removeButton: {
    position: 'absolute',
    left: -30,
    top: '50%',
    marginTop: -15,
  },
  removeButtonText: {
    color: '#FF0000',
    fontSize: 36,
    fontWeight: 'bold',
    lineHeight: 36,
  },
  poster: {
    width: 100,
    height: 150,
    borderRadius: 4,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#F9F8EB",
    marginBottom: 8,
  },
  info: {
    fontSize: 14,
    color: "#F9F8EB",
    marginBottom: 4,
  },
  actor: {
    fontSize: 14,
    color: "#F9F8EB",
    marginLeft: 8,
  },
  ratingContainer: {
    backgroundColor: "#FFD700",
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  rating: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  divider: {
    height: 1,
    backgroundColor: '#5E5A5A',
    marginHorizontal: 20,
    marginVertical: 8,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  emptyText: {
    color: "#5E5A5A",
    fontSize: 18,
    textAlign: "center",
  },
  snackbar: {
    backgroundColor: '#5E5A5A',
  },
});