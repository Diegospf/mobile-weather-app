import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Precipitation = ({ rainChance, humidity, windSpeed }) => {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Ionicons name="umbrella-outline" size={20} color="#fff" />
        <Text style={styles.text}>{rainChance}%</Text>
      </View>
      <View style={styles.info}>
        <Ionicons name="water-outline" size={20} color="#fff" />
        <Text style={styles.text}>{humidity}%</Text>
      </View>
      <View style={styles.info}>
        <Ionicons name="speedometer-outline" size={20} color="#fff" />
        <Text style={styles.text}>{windSpeed}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    justifyContent: "space-evenly",
    backgroundColor: "rgba(0, 0, 0, 0.15)",
    margin: 30,
    paddingVertical: 10,
    borderRadius: 20,
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 13,
    color: "white",
  },
});

export default Precipitation;
