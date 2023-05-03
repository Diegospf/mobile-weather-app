import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Weather = ({
  images,
  condition,
  temperature,
  minTemperature,
  maxTemperature,
  day,
}) => {
  return (
    <View style={styles.container}>
      <Image source={images[condition]} style={styles.image} />
      <View style={styles.temperatureContainer}>
        <Text style={styles.temperature}>{temperature}°</Text>
        {day ? (
          <Text
            style={[styles.text, { fontFamily: "Jost-Bold", fontSize: 20 }]}
          >
            {day}
          </Text>
        ) : (
          <Text style={styles.text}>Precipitações</Text>
        )}
        <View style={styles.minMaxTemperatureContainer}>
          <Text style={styles.text}>Max: {maxTemperature}°</Text>
          <Text style={styles.text}>Min: {minTemperature}°</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  temperatureContainer: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
  temperature: {
    fontSize: 60,
    color: "white",
    marginLeft: 15,
    fontFamily: "Jost-SemiBold",
  },
  minMaxTemperatureContainer: {
    display: "flex",
    flexDirection: "row",
    width: 150,
    justifyContent: "space-around",
  },
  text: {
    color: "white",
    fontSize: 15,
    fontFamily: "Jost-Medium",
  },
});

export default Weather;
