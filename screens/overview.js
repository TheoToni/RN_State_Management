import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import movieData from "../data/data";

export default function overview() {
  return (
    <FlatList
      data={movieData}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.releaseDate}>{item.director}</Text>
        </View>
      )}
    ></FlatList>
  );
}

const styles = StyleSheet.create({
  container: {
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
