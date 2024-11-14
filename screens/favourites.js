import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import MovieListItem from "../components/MovieListItem";

export default function Favourites() {
  const { favoriteMovies } = useContext(AppContext);

  if (favoriteMovies.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No favorite movies yet!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteMovies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MovieListItem item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  emptyText: {
    fontSize: 16,
    color: "#666",
  },
});
