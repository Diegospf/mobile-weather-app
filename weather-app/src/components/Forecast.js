import { useState, React } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Modal } from "react-native";
import Weather from "./Weather";
import Precipitation from "./Precipitation";
import { LinearGradient } from "expo-linear-gradient";

function weekDay(day) {
  if (day === "Seg") {
    return "Segunda";
  }
  if (day === "Ter") {
    return "Terça";
  }
  if (day === "Qua") {
    return "Quarta";
  }
  if (day === "Qui") {
    return "Quinta";
  }
  if (day === "Sex") {
    return "Sexta";
  }
  if (day === "Sáb") {
    return "Sábado";
  }
  if (day === "Dom") {
    return "Domingo";
  }
}

const getModalBackgroundColor = (condition) => {
  switch (condition) {
    case "rain":
    case "storm":
    case "clear_night":
    case "cloudly_night":
    case "none_night":
      return ["#0B306D", "#0E46AF"];
    case "clear_day":
    case "cloudly_day":
    case "none_day":
      return ["#30aedd", "#2ec6e9"];
    case "hail":
    case "snow":
    case "fog":
    case "cloud":
      return ["#323232", "#969696"];
    default:
      return ["#30aedd", "#2ec6e9"];
  }
};

const Forecast = ({ forecast, images }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDay, setSelectedDay] = useState({});

  const toggleModal = (day) => {
    setSelectedDay(day);
    setModalVisible(!modalVisible);
  };

  const modalBackgroundColor = getModalBackgroundColor(selectedDay.condition);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Próximas Previsões</Text>
        <Ionicons name="calendar-outline" size={25} color="#fff" />
      </View>
      {forecast.slice(1, 8).map((day, index) => (
        <TouchableOpacity
          key={index}
          style={styles.forecastRow}
          onPress={() => toggleModal(day)}
        >
          <Text style={styles.day}>{weekDay(day.weekday)}</Text>
          <Image source={images[day.condition]} style={styles.image} />
          <View style={styles.temperatures}>
            <Text style={styles.temperatureMax}>{day.max}°</Text>
            <Text style={styles.temperatureMin}>{day.min}°</Text>
          </View>
        </TouchableOpacity>
      ))}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modal}>
          <LinearGradient
            colors={modalBackgroundColor}
            locations={[0, 1]}
            style={styles.containerModal}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            {selectedDay && (
              <Weather
                images={images}
                condition={selectedDay.condition}
                temperature={selectedDay.max}
                minTemperature={selectedDay.min}
                maxTemperature={selectedDay.max}
                day={weekDay(selectedDay.weekday)}
              />
            )}
            {selectedDay && (
              <Precipitation
                rainChance={selectedDay.rain_probability}
                cloudiness={selectedDay.cloudiness}
                windSpeed={selectedDay.wind_speedy}
              />
            )}
            <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
              <Ionicons name="close-outline" size={25} color="black" />
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    marginVertical: 20,
    backgroundColor: "rgba(0, 0, 50, 0.20)",
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
    fontFamily: "Jost-Bold",
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
    fontFamily: "Jost-SemiBold",
    color: "white",
    width: 70,
    textAlign: "left",
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
    fontFamily: "Jost-Medium",
    color: "white",
    marginHorizontal: 3,
  },
  temperatureMin: {
    fontSize: 14,
    fontFamily: "Jost-Medium",
    color: "rgba(255, 255, 255, 0.6)",
    marginHorizontal: 3,
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  containerModal: {
    width: "80%",
    paddingVertical: 50,
    borderRadius: 15,
  },
  modalText: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 20,
  },
  closeButton: {
    position: "absolute",
    right: 10,
    top: 10,
    backgroundColor: "rgba(255,255,255,0.2)",
    padding: 5,
    borderRadius: 5,
  },
});

export default Forecast;
