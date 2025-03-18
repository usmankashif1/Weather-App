import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

const {width, height} = Dimensions.get('window');

const ScreenTwo = () => {

  const [cityName, setCityName] = useState('Islamabad');
  const [displayCity, setDisplayCity] = useState('Islamabad');
  const [AddCity,setAddCity]=useState('');
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const API_KEY = '60ae1d9b5e0140bc772311bfd8978781';

  const currentWeather = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`,
    );
    const json = await response.json();
    setData(json);
    setLoading(false);
  };

  useEffect(() => {
    currentWeather();
  }, []);

  const handleInputCityName = () => {
    currentWeather();
    setDisplayCity(cityName);
    setCityName('');
  };

  return loading ? (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size={'large'} color={'red'} />
    </View>
  ) : (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <LinearGradient
          style={styles.gradient}
          colors={['#1c2546', '#343673', '#5943a6', '#664da9', '#894cab']}>
          {/* Search Bar */}
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter City Name"
              placeholderTextColor={'white'}
              onChangeText={val => setCityName(val)}
            />
            <TouchableOpacity onPress={handleInputCityName}>
              <Ionicons name="search" size={27} color={'white'} />
            </TouchableOpacity>
          </View>

          {/* City Name */}
          <View style={styles.cityNameContainer}>
            <Text style={styles.cityName}>{displayCity}</Text>
          </View>

          {/* Weather Icon */}
          <View style={styles.weatherIconContainer}>
            <Image
              style={styles.weatherIcon}
              source={require('../assets/images/cloudRain.png')}
            />
          </View>

          {/* Weather Details */}
          <View style={styles.header}>
            <Text style={styles.temperature}>{data?.main?.temp}°C</Text>
            <Text style={styles.precipitations}>Precipitations</Text>
            <Text style={styles.maxMin}>
              Max: {data?.main?.temp_max} Min: {data?.main?.temp_min}
            </Text>
          </View>

          {/* Footer Image */}
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/images/House.png')}
              style={styles.image}
            />
          </View>

          {/* Forecast Section */}
          <LinearGradient
            style={styles.footer}
            colors={['#343673', '#5943a6', '#664da9', '#894cab']}>
            <View style={styles.footerHeader}>
              <Text style={styles.date}>Today</Text>
              <Text style={styles.date}>July, 21</Text>
            </View>
            <View style={styles.forecastContainer}>
              {[...Array(5)].map((_, index) => (
                <View key={index} style={styles.forecast}>
                  <Text style={styles.forecastTemp}>
                    {Math.floor(data?.main?.temp_min)}°C
                  </Text>
                  <Image
                    style={styles.forecastIcon}
                    source={require('../assets/images/rainClouds.png')}
                  />
                  <Text style={styles.forecastTimeBottom}>3:00</Text>
                </View>
              ))}
            </View>
          </LinearGradient>
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewContent: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: 'grey',
    paddingHorizontal: 20,
    paddingVertical: height * 0.008,
    margin: 20,
  },
  textInput: {
    flex: 1,
    color: 'white',
    fontSize: 16,
  },
  cityNameContainer: {
    alignItems: 'center',
  },
  cityName: {
    fontSize: height * 0.038,
    color: 'white',
  },
  weatherIconContainer: {
    alignItems: 'center',
  },
  weatherIcon: {
    // resizeMode: 'contain',
    width: scale(180),
    height: scale(180),
    bottom: 30,
  },
  footerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 2,
    paddingVertical: 5,
  },
  forecastIcon: {
    height: scale(105),
    width: scale(105),
    right: 10,
  },
  header: {
    alignItems: 'center',
    bottom: 30,
  },
  temperature: {
    fontSize: height * 0.05,
    color: 'white',
    fontWeight: 'bold',
  },
  precipitations: {
    fontSize: height * 0.03,
    color: 'white',
    // fontFamily: 'Poppins-Regular',
  },
  maxMin: {
    fontSize: height * 0.018,
    color: 'white',
    // fontFamily: 'Poppins-Regular',
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: width * 0.8,
    height: height * 0.2,
    bottom: 15,
    right:10
    // marginVertical:15
  },
  footer: {
    backgroundColor: '#6200EE',
    borderRadius: 30,
    bottom: 20,
  },
  date: {
    fontSize: height * 0.03,
    color: 'white',
    // fontFamily: 'Poppins-Bold',
    fontWeight: 'bold',
  },
  forecastContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // Adjust alignment
    alignItems: 'center', // Align items vertically
    marginTop: 20, // Ensure no
  },
  forecast: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  forecastTemp: {
    fontSize: height * 0.022,
    color: 'white',
  },
  forecastTimeBottom: {
    fontSize: height * 0.022,
    color: 'white',
    bottom: 65,
  },
});

export default ScreenTwo;
