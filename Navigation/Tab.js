import React, { Component } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { StatusBar } from 'expo-status-bar';

import SocialScreen from '../Screens/SocialScreen';
import Profile from '../Screens/Profile';

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      labeled={false}
      barStyle={styles.bottomStyle}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          var iconName;
          if (route.name === 'SocialScreen') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'create' : 'create-outline';
          }
          return (
            <Ionicons
              name={iconName}
              size={size}
              color={color}
              style={styles.icons}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'orange',
      }}>
      <Tab.Screen name="Social Screen" component={SocialScreen} />
      <Tab.Screen name="Profile Screen" component={Profile} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  bottomStyle: {
    backgroundColor: '#091312',
    height: '8%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
    position: 'absolute',
  },
  icons: {
    width: RFValue(30),
    height: RFValue(30),
    borderColor:"white",
  },
});

export default BottomTabNavigator;
