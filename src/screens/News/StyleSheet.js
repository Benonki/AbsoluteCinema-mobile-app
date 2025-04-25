import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F8EB",
    padding: 12,
  },
  newsImage: {
    width: "100%",
    height: 180,
    borderRadius: 6,
    marginBottom: 12,
  },
  topic: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#000",
  },
  description: {
    fontSize: 16,
    color: "#000",
    marginBottom: 16,
  },
  commentHeader: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  commentBox: {
    flexDirection: "row",
    backgroundColor: "#E8E6DA",
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 10,
  },
  commentContent: {
    flex: 1,
  },
  commentUser: {
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 4,
  },
  commentText: {
    fontSize: 14,
    color: "#333",
  },
  Date: {
    textAlign: "right",
    fontSize: 14,
    color: "#777",
    marginTop: 4,
  },
  noComments: {
    fontSize: 14,
    color: "#777",
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#5E5A5A",
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30,
  },
  buttonText: {
    color: "#F9F8EB",
    fontSize: 16,
    fontWeight: "bold",
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
