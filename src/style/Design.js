import { Dimensions, StyleSheet } from 'react-native';
const {height,width}=Dimensions.get('window')

const Design = StyleSheet.create({
  container: {
    flex: 1,
  },
  ViewCloudRain: {
    flex: 0.7,
  },
  CloudRain: {
    alignSelf: 'center',
    height: '100%',
    width: '100%',
    top:6,
  },
  homeText: {
    alignItems: 'center',
  },
  Button: {
    fontSize: 64,
    borderRadius: 30,
    width: 304,
    backgroundColor: '#DDB130',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 30,
    color: '#362a84',
    // fontFamily: 'Poppins-Bold',
    fontWeight:'bold',
    top: 3,
  },
  
  rectangle: {
    width: 360,
    height: 150,
    backgroundColor: 'black',
    bottom: 45,
    borderRadius: 30,
  },
  
  
  
  
});

export default Design;
