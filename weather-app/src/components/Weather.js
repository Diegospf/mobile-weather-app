import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Weather = ({
  condition,
  temperature,
  minTemperature,
  maxTemperature,
}) => {
  // Mapeia as condições com as imagens
  const images = {
    clear_day: require("../../assets/images/weather/clear_day.png"),
    clear_night: require("../../assets/images/weather/clear_night.png"),
    cloud: require("../../assets/images/weather/cloud.png"),
    cloudly_day: require("../../assets/images/weather/cloudly_day.png"),
    cloudly_night: require("../../assets/images/weather/cloudly_night.png"),
    rain: require("../../assets/images/weather/rain.png"),
    storm: require("../../assets/images/weather/storm.png"),
    snow: require("../../assets/images/weather/snow.png"),
    hail: require("../../assets/images/weather/hail.png"),
    fog: require("../../assets/images/weather/fog.png"),
    none_day: require("../../assets/images/weather/none_day.png"),
    none_night: require("../../assets/images/weather/none_night.png"),
  };

  return (
    <View style={styles.container}>
      <Image source={images[condition]} style={styles.image} />
      <View style={styles.temperatureContainer}>
        <Text style={styles.temperature}>{temperature}°</Text>
        <Text style={styles.text}>Precipitações</Text>
        <View style={styles.minMaxTemperatureContainer}>
          <Text style={styles.text}>Max: {minTemperature}°</Text>
          <Text style={styles.text}>Min: {maxTemperature}°</Text>
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
