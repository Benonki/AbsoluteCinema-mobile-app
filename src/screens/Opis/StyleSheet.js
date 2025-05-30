import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F8EB',
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 80,
  },
  loadingText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    color: '#555',
  },
  errorText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    color: 'red',
  },
  topSection: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  poster: {
    width: 120,
    height: 180,
    borderRadius: 8,
    marginRight: 16,
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
  basicInfo: {
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  infoText: {
    fontSize: 14,
    marginBottom: 4,
    color: '#555',
  },
  infoLabel: {
    fontWeight: 'bold',
    color: '#333',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    color: '#444',
  },
  castScroll: {
    marginHorizontal: -16,
    paddingLeft: 16,
  },
  actorCard: {
    width: 100,
    marginRight: 40,
  },
  actorImage: {
    width: 100,
    height: 120,
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: '#ddd',
  },
  actorName: {
    fontWeight: 'bold',
    fontSize: 13,
    textAlign: 'center',
    color: '#333',
  },
  actorRole: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginTop: 2,
  },
  reviewCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
    backgroundColor: '#ddd',
  },
  reviewUserInfo: {
    flex: 1,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#333',
  },
  reviewRating: {
    color: '#FFD700',
    fontSize: 16,
    marginTop: 2,
  },
  reviewText: {
    fontSize: 14,
    color: '#444',
    lineHeight: 20,
  },
  noReviews: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginVertical: 10,
  },
  bottomButtons: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#F9F8EB',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  reviewButton: {
    flex: 1,
    backgroundColor: '#5E5A5A',
    paddingVertical: 12,
    borderRadius: 8,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  reviewButtonText: {
    color: '#F9F8EB',
    fontWeight: 'bold',
    fontSize: 16,
  },
  heartButton: {
    width: 50,
    backgroundColor: '#5E5A5A',
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#F9F8EB",
    padding: 16,
    width: "80%",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalLabel: {
    fontSize: 16,
    fontWeight: "bold",
  },
  modalClose: {
    fontSize: 22,
    color: "red",
  },
  textArea: {
    backgroundColor: "#EDEBE6",
    borderRadius: 12,
    height: 120,
    textAlignVertical: "top",
    padding: 10,
    marginTop: 10,
  },
  counter: {
    textAlign: "right",
    fontSize: 12,
    color: "#333",
  },
  addButton: {
    marginTop: 10,
    backgroundColor: "#5E5A5A",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  addButtonText: {
    color: "#F9F8EB",
    fontWeight: "bold",
    fontSize: 16,
  },
});
