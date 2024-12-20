import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ScreenTwo from './src/screens/Home';
import Splash from './src/screens/Splash';

const App = () => {
  const [isShowSplash, setisShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setisShowSplash(false);
    }, 3000);
  });
  return <View style={{flex:1}}>{isShowSplash ? <Splash /> : <ScreenTwo />}</View>;
};

export default App;

const styles = StyleSheet.create({});
