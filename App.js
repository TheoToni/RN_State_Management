import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SafeAreaView } from "react-native-safe-area-context";
import Overview from "./screens/Overview";
import Favourites from "./screens/Favourites";
import { AppProvider } from "./context/AppContext";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Overview">
          <Drawer.Screen
            name="Overview"
            component={Overview}
            options={{
              title: "All Movies",
            }}
          />
          <Drawer.Screen
            name="Favourites"
            component={Favourites}
            options={{
              title: "Favorite Movies",
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
