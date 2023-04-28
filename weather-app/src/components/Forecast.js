import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Forecast = ({ forecast }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Próximas Previsões</Text>
        <Ionicons name="calendar-outline" size={25} color="#fff" />
      </View>
      {forecast.slice(1, 8).map((day, index) => (
        <View key={index} style={styles.forecastRow}>
          <Text style={styles.day}>{day.weekday}</Text>
          <Image
            source={require("../../assets/images/weather/cloud.png")}
            style={styles.image}
          />
          <View style={styles.temperatures}>
            <Text style={styles.temperatureMax}>{day.max}°</Text>
            <Text style={styles.temperatureMin}>{day.min}°</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    marginVertical: 20,
    backgroundColor: "rgba(0, 0, 0, 0.15)",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 19,
    fontWeight: "bold",
    color: "white",
  },
  forecastRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 7,
  },
  day: {
    fontSize: 16,
    fontWeight: "bold",
    color:"white",
    width: 50,
    textAlign: "center",
  },
  image: {
    width: 28,
    height: 28,
  },
  temperatures: {
    flexDirection: "row",
    alignItems: "center",
  },
  temperatureMax: {
    fontSize: 14,
    color: "white",
    marginHorizontal: 3,
  },
  temperatureMin: {
    fontSize: 14,
    color:  "rgba(255, 255, 255, 0.6)",
    marginHorizontal: 3,
  },
});

export default Forecast;
