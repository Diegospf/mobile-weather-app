import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Location from "./src/components/Location";
import { Ionicons } from "@expo/vector-icons";
import { getStatusBarHeight } from "react-native-status-bar-height";
import Precipitation from "./src/components/Precipitation";
import Weather from "./src/components/Weather";
import TodayWeather from "./src/components/TodayWeather";
import Forecast from "./src/components/Forecast";
import { useFonts } from "expo-font";

export default function App() {
  const statusBarHeight = getStatusBarHeight();
  const json = require("./src/resources/mock");
  const [location, setLocation] = useState("BRXX0195");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.hgbrasil.com/weather/?format=json&cid=${location}`
      );
      const data = await response.json();
      if (data.error) {
        setWeatherData(json.results);
      } else {
        setWeatherData(data.results);
      }
    }
    fetchData();
  }, [location]);
  const [weatherData, setWeatherData] = useState(null);

  const images = {
    clear_day: require("./src/assets/images/weather/clear_day.png"),
    clear_night: require("./src/assets/images/weather/clear_night.png"),
    cloud: require("./src/assets/images/weather/cloud.png"),
    cloudly_day: require("./src/assets/images/weather/cloudly_day.png"),
    cloudly_night: require("./src/assets/images/weather/cloudly_night.png"),
    rain: require("./src/assets/images/weather/rain.png"),
    storm: require("./src/assets/images/weather/storm.png"),
    snow: require("./src/assets/images/weather/snow.png"),
    hail: require("./src/assets/images/weather/hail.png"),
    fog: require("./src/assets/images/weather/fog.png"),
    none_day: require("./src/assets/images/weather/none_day.png"),
    none_night: require("./src/assets/images/weather/none_night.png"),
  };

  let colors = ["#30aedd", "#2ec6e9"];
  if (weatherData !== null) {
    switch (weatherData.condition_slug) {
      case "rain":
      case "storm":
      case "clear_night":
      case "cloudly_night":
      case "none_night":
        colors = ["#0B306D", "#0E46AF"];
        break;
      case "clear_day":
      case "cloudly_day":
      case "none_day":
        colors = ["#30aedd", "#2ec6e9"];
        break;
      case "hail":
      case "snow":
      case "fog":
      case "cloud":
        colors = ["#323232", "#969696"];
        break;
    }
  }

  let [fontsLoaded] = useFonts({
    "Jost-SemiBold": require("./src/assets/fonts/Jost-SemiBold.ttf"),
    "Jost-Regular": require("./src/assets/fonts/Jost-Regular.ttf"),
    "Jost-Bold": require("./src/assets/fonts/Jost-Bold.ttf"),
    "Jost-Medium": require("./src/assets/fonts/Jost-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  function handleLocationChange(newLocation) {
    setLocation(newLocation);
  }

  return (
    <LinearGradient
      colors={colors}
      locations={[0, 1]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={{ display: "flex", width: "100%", zIndex: 0 }}>
        {weatherData && (
          <ScrollView>
            <View style={[styles.topBar, { marginTop: statusBarHeight }]}>
              <View style={styles.select}>
                <Ionicons name="location-outline" size={24} color="#fff" />
                <Location
                  value={location}
                  onValueChange={handleLocationChange}
                />
              </View>
              <Ionicons name="notifications-outline" size={24} color="#fff" />
            </View>
            <Weather
              images={images}
              condition={weatherData.condition_slug}
              temperature={weatherData.temp}
              minTemperature={weatherData.forecast[0].min}
              maxTemperature={weatherData.forecast[0].max}
            />
            <Precipitation
              rainChance={weatherData.forecast[0].rain_probability}
              humidity={weatherData.humidity}
              windSpeed={weatherData.wind_speedy}
            />
            <TodayWeather
              condition={weatherData.condition_slug}
              images={images}
              temp={weatherData.temp}
              max={weatherData.max}
            />
            <Forecast
              forecast={weatherData.forecast}
              images={images}
            ></Forecast>
          </ScrollView>
        )}
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
  select: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
