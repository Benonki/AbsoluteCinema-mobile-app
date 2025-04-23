import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F8EB",
    padding: 16,
  },
  topSection: {
    marginBottom: 50,
  },
  statsRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 12,
  },
  statItem: {
    flex: 1,
    alignItems: "center",
  },
  statLabel: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#555",
  },
  statValue: {
    fontSize: 24,
    fontWeight: "bold",
  },
  middleSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 65,
  },
  inputsContainer: {
    flex: 1,
    marginRight: 16,
  },
  inputGroup: {
    marginBottom: 16,
  },
  input: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 8,
    paddingLeft: 12,
    fontSize: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  profileImageContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
    backgroundColor: "white",
    width: 100,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#E5E5E5",
  },
  buttonContainer: {
    alignItems: "center",
    gap: 12,
  },
  button: {
    backgroundColor: "#5E5A5A",
    borderRadius: 20,
    padding: 12,
    width: "60%",
    alignItems: "center",
  },
  buttonText: {
    color: "#F9F8EB",
    fontWeight: "500",
    fontSize: 16,
  },
});

export default styles;