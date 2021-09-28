import React from "react";
import { Image, StyleSheet, View, StatusBar } from "react-native";
import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.room}
        source={require("../assets/room.jpg")}
      />
      <View style={styles.leftButton}></View>
      <View style={styles.rightButton}></View>
      <StatusBar barStyle="light-content" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  leftButton: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 10,
    left: 30,
  },
  rightButton: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: "absolute",
    top: 10,
    right: 30,
  },
  room: {
    width: "100%",
    height: "100%",
  },
});
export default ViewImageScreen;
