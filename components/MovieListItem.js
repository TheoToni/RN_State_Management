// components/MovieListItem.js
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MovieListItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.releaseDate}>Directed by: {item.director}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    backgroundColor: "#f9f9f9",
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

export default MovieListItem;
