import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Location from "./src/components/Location";
import { Ionicons } from "@expo/vector-icons";
import { getStatusBarHeight } from "react-native-status-bar-height";

export default function App() {
  const statusBarHeight = getStatusBarHeight();

  return (
    //#0B306D ##0E46AF
    <LinearGradient
      colors={["#30aedd", "#2ec6e9"]}
      locations={[0.5, 1]}
      style={styles.container}
    >
      <View style={[styles.topBar, { marginTop: statusBarHeight }]}>
        <View
          style={styles.select}
        >
          <Ionicons name="location-outline" size={24} color="#fff" />
          <Location></Location>
        </View>
        <Ionicons name="notifications-outline" size={24} color="#fff" />
      </View>
      <View style={{ display: "flex", width: "100%", zIndex: 0 }}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    alignItems: "center",
    zIndex: 1,
  },
  select:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  }
});
