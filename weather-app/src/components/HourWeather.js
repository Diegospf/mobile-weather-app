import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const HourWeather = ({ temperature, condition, images, hour }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.temperature}>{temperature}°C</Text>
      <Image
        style={styles.image}
        source={images[condition]}
      />
      <Text style={styles.hour}>{hour}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical:5,
    paddingHorizontal:10,
    marginBottom:10
  },
  temperature: {
    fontSize: 17,
    fontFamily: "Jost-Regular",
    marginTop: 5,
    color: "white",
  },
  image: {
    width: 45,
    height: 45,
    marginBottom: 15,
  },
  hour: {
    fontSize: 17,
    fontFamily: "Jost-Regular",
    color: "white",
  },
});

export default HourWeather;
