import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F8EB",
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 1,
    paddingBottom: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchIcon: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: '#F2F2F2',
    borderWidth: 1,
    borderColor: 'black',
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
  searchBarContainer: {
    padding: 10,
    paddingHorizontal: 15,
    backgroundColor: '#F9F8EB',
  },
  searchInput: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  searchResults: {
    flex: 1,
    backgroundColor: '#F9F8EB',
  },
  searchResultItem: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    alignItems: 'center',
  },
  searchResultImage: {
    width: 70,
    height: 100,
    borderRadius: 5,
  },
  searchResultTextContainer: {
    marginLeft: 15,
    flex: 1,
  },
  searchResultTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  noResultsText: {
    textAlign: 'center',
    padding: 20,
    fontSize: 16,
    color: '#666',
  }
});