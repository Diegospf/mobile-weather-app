import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Location from "./src/components/Location";
import { Ionicons } from "@expo/vector-icons";
import { getStatusBarHeight } from "react-native-status-bar-height";
import Precipitation from "./src/components/Precipitation";
import Weather from "./src/components/Weather";
import sunshineImage from "./assets/images/icon.png";
import TodayWeather from "./src/components/TodayWeather";
import Forecast from "./src/components/Forecast";
import { useFonts } from "expo-font";

export default function App() {
  const statusBarHeight = getStatusBarHeight();

  const json = {
    by: "cid",
    valid_key: false,
    results: {
      temp: 25,
      date: "28/04/2023",
      time: "00:16",
      condition_code: "29",
      description: "Parcialmente nublado",
      currently: "noite",
      cid: "",
      city: "Natal, RN",
      img_id: "29n",
      humidity: 94,
      cloudiness: 40.0,
      rain: 0.0,
      wind_speedy: "1.54 km/h",
      wind_direction: 170,
      sunrise: "05:20 am",
      sunset: "05:15 pm",
      condition_slug: "none_day",
      city_name: "Natal",
      forecast: [
        {
          date: "28/04",
          weekday: "Sex",
          max: 29,
          min: 24,
          cloudiness: 89.0,
          rain: 15.3,
          rain_probability: 92,
          wind_speedy: "4.99 km/h",
          description: "Chuva",
          condition: "rain",
        },
        {
          date: "29/04",
          weekday: "Sáb",
          max: 29,
          min: 24,
          cloudiness: 63.0,
          rain: 8.97,
          rain_probability: 97,
          wind_speedy: "4.36 km/h",
          description: "Chuva",
          condition: "rain",
        },
        {
          date: "30/04",
          weekday: "Dom",
          max: 28,
          min: 24,
          cloudiness: 93.0,
          rain: 6.16,
          rain_probability: 100,
          wind_speedy: "4.55 km/h",
          description: "Chuvas esparsas",
          condition: "rain",
        },
        {
          date: "01/05",
          weekday: "Seg",
          max: 29,
          min: 24,
          cloudiness: 94.0,
          rain: 3.83,
          rain_probability: 75,
          wind_speedy: "4.52 km/h",
          description: "Chuvas esparsas",
          condition: "rain",
        },
        {
          date: "02/05",
          weekday: "Ter",
          max: 29,
          min: 23,
          cloudiness: 29.0,
          rain: 0.68,
          rain_probability: 56,
          wind_speedy: "4.17 km/h",
          description: "Chuvas esparsas",
          condition: "rain",
        },
        {
          date: "03/05",
          weekday: "Qua",
          max: 29,
          min: 24,
          cloudiness: 15.0,
          rain: 1.96,
          rain_probability: 92,
          wind_speedy: "4.64 km/h",
          description: "Chuvas esparsas",
          condition: "rain",
        },
        {
          date: "04/05",
          weekday: "Qui",
          max: 29,
          min: 24,
          cloudiness: 27.0,
          rain: 8.43,
          rain_probability: 95,
          wind_speedy: "4.34 km/h",
          description: "Chuvas esparsas",
          condition: "rain",
        },
        {
          date: "05/05",
          weekday: "Sex",
          max: 29,
          min: 24,
          cloudiness: 49.0,
          rain: 3.27,
          rain_probability: 68,
          wind_speedy: "5.11 km/h",
          description: "Chuvas esparsas",
          condition: "rain",
        },
        {
          date: "06/05",
          weekday: "Sáb",
          max: 30,
          min: 24,
          cloudiness: 51.0,
          rain: 2.3,
          rain_probability: 64,
          wind_speedy: "4.83 km/h",
          description: "Chuvas esparsas",
          condition: "rain",
        },
        {
          date: "07/05",
          weekday: "Dom",
          max: 29,
          min: 25,
          cloudiness: 52.0,
          rain: 3.26,
          rain_probability: 73,
          wind_speedy: "4.39 km/h",
          description: "Chuvas esparsas",
          condition: "rain",
        },
      ],
      cref: "749abe",
    },
    execution_time: 0.0,
    from_cache: true,
  };

  const [location, setLocation] = useState("BRXX0158");
  const [weatherData, setWeatherData] = useState("LEMBRAR DE COLOCAR NULL");

  let colors = ["#30aedd", "#2ec6e9"];
  switch (json.results.condition_slug) {
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

  let [fontsLoaded] = useFonts({
    "Jost-SemiBold": require("./assets/fonts/Jost-SemiBold.ttf"),
    "Jost-Regular": require("./assets/fonts/Jost-Regular.ttf"),
    "Jost-Bold": require("./assets/fonts/Jost-Bold.ttf"),
    "Jost-Medium": require("./assets/fonts/Jost-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  function handleLocationChange(newLocation) {
    setLocation(newLocation);
  }

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch(
  //       `https://api.hgbrasil.com/weather/?format=json&cid=${location}`
  //     );
  //     const data = await response.json();
  //     setWeatherData(data);
  //   }
  //   fetchData();
  // }, [location]);

  return (
    <LinearGradient
      colors={colors}
      locations={[0, 1]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={{ display: "flex", width: "100%", zIndex: 0 }}>
        {weatherData ? (
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
              condition={json.results.condition_slug}
              temperature={15}
              minTemperature={20}
              maxTemperature={30}
            />
            <Precipitation
              rainChance={json.results.forecast[0].rain_probability}
              humidity={json.results.humidity}
              windSpeed={json.results.wind_speedy}
            />
            <TodayWeather />
            <Forecast forecast={json.results.forecast}></Forecast>
          </ScrollView>
        ) : (
          <Text>Carregando...</Text>
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
