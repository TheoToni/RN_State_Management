import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import movieData from "../data/data";
import MovieListItem from "../components/MovieListItem";

export default function Overview() {
  const renderItem = ({ item }) => <MovieListItem item={item} />;
  return (
    <FlatList
      data={movieData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
    />
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
