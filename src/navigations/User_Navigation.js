import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Search from '../screens/Search';
import VideoPlayer from '../screens/VideoPlayer';
import Tab_Navigation from './Tab_Navigation';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import { reducer } from '../reducers/reducer';
import Profile from '../screens/Profile';
const store = createStore(reducer);
const Stack = createNativeStackNavigator();
const User_Navigation = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Tab_Navigation"
            component={Tab_Navigation}
            options={{headerShown: false, gestureEnabled: false}}
          />
          <Stack.Screen
            name="Search"
            component={Search}
            options={{headerShown: false, gestureEnabled: false}}
          />
          <Stack.Screen
            name="VideoPlayer"
            component={VideoPlayer}
            options={{headerShown: false, gestureEnabled: false}}
          />
          <Stack.Screen 
          name='Profile'
          component={Profile}
          options={{headerShown: false, gestureEnabled: false}}

          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default User_Navigation;