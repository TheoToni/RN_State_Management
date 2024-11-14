import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function MovieListItem({ item }) {
  const { toggleFavorite, isFavorite } = useContext(AppContext);

  function pressHandler() {
    toggleFavorite(item);
  }

  return (
    <View style={styles.container}>
      <View style={styles.twoColContainer}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.releaseDate}>Directed by: {item.director}</Text>
          <Text style={styles.rating}>Rating: {item.rating}</Text>
        </View>
        <Pressable onPress={pressHandler}>
          <Ionicons
            name="star"
            size={24}
            color={isFavorite(item.id) ? "gold" : "black"}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    backgroundColor: "#f9f9f9",
  },
  twoColContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  releaseDate: {
    fontSize: 14,
    color: "#666",
  },
});
