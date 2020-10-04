import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Dashboard from './pages/Dashboard';

const AppStack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      isSignedIn ? (
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="SignIn" component={SignIn} />
        <AppStack.Screen name="SignUp" component={SignUp} />
      </AppStack.Navigator>
      ) : (
      <Tab.Navigator>
        <Tab.Screen name="Dashboard" component={Dashboard} />
      </Tab.Navigator>
      )
    </NavigationContainer>
  );
}
