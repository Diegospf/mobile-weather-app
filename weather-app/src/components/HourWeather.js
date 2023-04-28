import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const HourWeather = ({ temperature, image, hour }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.temperature}>{temperature}°C</Text>
      <Image
        style={styles.image}
        source={require("../../assets/images/weather/clear_day.png")}
      />
      <Text style={styles.hour}>{hour}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  temperature: {
    fontSize: 17,
    marginTop: 5,
    marginBottom: 15,
    color:'white'
  },
  image: {
    width: 45,
    height: 45,
    marginBottom: 15,
  },
  hour: {
    fontSize: 17,
    color:'white',
    marginBottom: 15,
  },
});

export default HourWeather;