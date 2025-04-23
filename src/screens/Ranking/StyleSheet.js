import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F8EB",
    padding: 16,
  },
  tabContainer: {
    flexDirection: "row",
    marginBottom: 24,
    borderRadius: 8,
    overflow: "hidden",
  },
  tabButton: {
    flex: 1,
    backgroundColor: "#5E5A5A",
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  activeTabButton: {
    backgroundColor: "#B7ACAC",
  },
  tabButtonText: {
    color: "#F9F8EB",
    fontWeight: "600",
  },
  listContainer: {
    paddingBottom: 16,
  },
  itemContainer: {
    flexDirection: "row",
    backgroundColor: "#5E5A5A",
    borderRadius: 8,
    marginBottom: 16,
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
  rankNumber: {
    position: 'absolute',
    left: -40,
    top: 10,
    fontSize: 32,
    fontWeight: "bold",
    color: "#5E5A5A",
    textShadowColor: '#F9F8EB',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  firstRankNumber: {
    fontSize: 62,
  },
  itemWrapper: {
    marginBottom: 8,
  },
  divider: {
    height: 1,
    backgroundColor: '#5E5A5A',
    marginHorizontal: 20,
    marginVertical: 8,
  },
  poster: {
    width: 130,
    height: 200,
    borderRadius: 4,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 16,
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
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});

export default styles;