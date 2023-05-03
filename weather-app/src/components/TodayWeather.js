import { useState, React }  from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import HourWeather from "./HourWeather";

let now = new Date();
let hour = now.getHours();
let day = now.getDate().toString().padStart(2, "0");
let month = (now.getMonth() + 1).toString().padStart(2, "0");

function nextHour(value) {
  return (hour + value) % 24;
}

const TodayWeather = ({ condition, images }) => {
  
  const [selectedHour, setSelectedHour] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Hoje</Text>
        <Text style={styles.date}>
          {day}/{month}
        </Text>
      </View>
      <View style={styles.content}>
        <TouchableOpacity  style={selectedHour === 0 ? styles.selectedHour : null}
          onPress={() => setSelectedHour(0)}>
          <HourWeather
            temperature="25"
            condition={condition}
            images={images}
            hour={`${hour.toString().padStart(2, "0")}:00`}
          />
        </TouchableOpacity>
        <TouchableOpacity style={selectedHour === 1 ? styles.selectedHour : null}
          onPress={() => setSelectedHour(1)}>
          <HourWeather
            temperature="27"
            condition={condition}
            images={images}
            hour={`${nextHour(1).toString().padStart(2, "0")}:00`}
          />
        </TouchableOpacity>
        <TouchableOpacity style={selectedHour === 2 ? styles.selectedHour : null}
          onPress={() => setSelectedHour(2)}>
          <HourWeather
            temperature="28"
            condition={condition}
            images={images}
            hour={`${nextHour(2).toString().padStart(2, "0")}:00`}
          />
        </TouchableOpacity>
        <TouchableOpacity style={selectedHour === 3 ? styles.selectedHour : null}
          onPress={() => setSelectedHour(3)}>
          <HourWeather
            temperature="30"
            condition={condition}
            images={images}
            hour={`${nextHour(3).toString().padStart(2, "0")}:00`}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    marginTop: 20,
    backgroundColor: "rgba(0, 0, 50, 0.20)",
    paddingTop: 10,
    paddingBottom: 20,
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
  selectedHour: {
    backgroundColor:'rgba(0, 225, 255, 0.20)',
    borderColor: 'rgba(0, 225, 255, 0.50)',
    borderWidth: 2,
    borderRadius: 20,
  },
});

export default TodayWeather;
