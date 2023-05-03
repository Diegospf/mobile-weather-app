import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HourWeather from "./HourWeather";

let now = new Date();
let hour = now.getHours();
let day = now.getDate().toString().padStart(2, "0");
let month = (now.getMonth() + 1).toString().padStart(2, "0");

function nextHour(value){
  return (hour + value) % 24;
}

const TodayWeather = ({condition, images}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Hoje</Text>
        <Text style={styles.date}>{day}/{month}</Text>
      </View>
      <View style={styles.content}>
        <HourWeather temperature="25" condition={condition} images={images} hour={`${hour.toString().padStart(2, '0')}:00`} />
        <HourWeather temperature="27" condition={condition} images={images} hour={`${nextHour(1).toString().padStart(2, '0')}:00`} />
        <HourWeather temperature="28" condition={condition} images={images} hour={`${nextHour(2).toString().padStart(2, '0')}:00`} />
        <HourWeather temperature="30" condition={condition} images={images} hour={`${nextHour(3).toString().padStart(2, '0')}:00`} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    marginTop: 20,
    backgroundColor: "rgba(0, 0, 50, 0.20)",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  title: {
    fontSize: 19,
    fontFamily: "Jost-Bold",
    color: "white",
  },
  date: {
    fontSize: 17,
    color: "white",
    fontFamily: "Jost-Regular",
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default TodayWeather;
