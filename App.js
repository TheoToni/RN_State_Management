import { StatusBar } from "expo-status-bar";
import { createContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Overview from "./screens/Overview";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        {
          <View style={styles.container}>
            <Overview />
          </View>
        }
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
