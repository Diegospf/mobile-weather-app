import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HourWeather from './HourWeather';

const TodayWeather = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Hoje</Text>
        <Text style={styles.date}>08/05</Text>
      </View>
      <View style={styles.content}>
        <HourWeather temperature="25" image="sunny" hour="09:00" />
        <HourWeather temperature="27" image="cloudy" hour="10:00" />
        <HourWeather temperature="28" image="sunny" hour="11:00" />
        <HourWeather temperature="30" image="rainy" hour="12:00" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    marginTop: 20,
    backgroundColor: "rgba(0, 0, 0, 0.15)",
    paddingVertical: 10,
    paddingHorizontal:20,
    borderRadius: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    color:'white'
  },
  date: {
    fontSize: 17,
    color:'white'
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default TodayWeather;