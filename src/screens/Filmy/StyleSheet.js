import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 5,
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
  },
  rankingNumber: {
    position: 'absolute',
    bottom: 30,
    left: 10,
    backgroundColor: 'rgba(0,0,0,0.7)',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
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
  searchResultYear: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  noResultsText: {
    textAlign: 'center',
    padding: 20,
    fontSize: 16,
    color: '#666',
  }
});