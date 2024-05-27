import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import User_Navigation from './src/navigations/User_Navigation';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <User_Navigation/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});