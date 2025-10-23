import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import HomeScreen from '../src/screens/HomeScreen';
import TrackingScreen from '../src/screens/TrackingScreen';
import HistoryScreen from '../src/screens/HistoryScreen';
import StatsScreen from '../src/screens/StatsScreen';

const Stack = createStackNavigator();

export default function RootLayout() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Tracking" component={TrackingScreen} />
        <Stack.Screen name="History" component={HistoryScreen} />
        <Stack.Screen name="Stats" component={StatsScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
