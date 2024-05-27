import {View, Text, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Explore from '../screens/Explore';
import Subscription from '../screens/Subscription';
import HomePage from '../screens/Home';
import { RFValue } from 'react-native-responsive-fontsize';
const Tab = createBottomTabNavigator();
const Tab_Navigation = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={({route}) => ({
          style: {
          },
          tabBarStyle: {
            backgroundColor: '#fff',
            height: 80,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            right: 50,
          },
          tabBarItemStyle: {
            marginTop: '2%',
            height: 60,
          },
          headerShown: false,
          tabBarScrollEnabled: true,
          tabBarIndicator: () => null,
        })}>
        <Tab.Screen
          name="HomePage"
          component={HomePage}
          options={{
            tabBarIcon: ({focused, color}) => (
              <View
                style={{
                  height: 0,
                  width: 40,
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={
                    focused
                      ? require('../assets/images/Home1.png')
                      : require('../assets/images/Home.png')
                  }
                  style={{width: 30,height: 30,}}
                />
              </View>
            ),
            tabBarLabel: () => (
              <Text style={{color:"#000", fontSize:RFValue(12)}}>Home</Text>
            ),
            gestureEnabled: false,
          }}
        />
        <Tab.Screen
          name="Explore"
          component={Explore}
          options={{
            tabBarIcon: ({focused, color}) => (
              <View
                style={{
                  height: 0,
                  width: 40,
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={
                    focused
                      ? require('../assets/images/Explore1.png')
                      : require('../assets/images/Explore.png')
                  }
                  style={{width: 27,height: 27,}}
                />
              </View>
            ),
            tabBarLabel: () => (
              <Text style={{color:"#000", fontSize:RFValue(12)}}>Explore</Text>
            ),
            gestureEnabled: false,
          }}
        />
        <Tab.Screen
          name="Subscription"
          component={Subscription}
          options={{
            tabBarIcon: ({focused, color}) => (
              <View
                style={{
                  height: 0,
                  width: 40,
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={
                    focused
                      ? require('../assets/images/Subscription.png')
                      : require('../assets/images/Subscription1.png')
                  }
                  style={{width: 30,height: 30,}}
                />
              </View>
            ),
            tabBarLabel: () => (
              <Text style={{color:"#000", fontSize:RFValue(12)}}>Subscription</Text>
            ),
            gestureEnabled: false,
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default Tab_Navigation;