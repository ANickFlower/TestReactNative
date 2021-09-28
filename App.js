import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  SafeAreaView,
  Alert,
  Button,
  Platform,
  useWindowDimensions,
} from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return <ViewImageScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center", //main
    alignItems: "center", //aligns items within each line
  },
  //? is if and : otherwise
  //paddingTop: Platform.OS === "android" ? 20 : 0,
});
