import React from 'react';
import { useSelector } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Dashboard from './pages/Dashboard';

const AppStack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Routes() {
  const isSignedIn = useSelector((state) => state.auth.signed);

  return (
    <NavigationContainer>
      {isSignedIn === true ? (
        <Tab.Navigator>
          <Tab.Screen name="Dashboard" component={Dashboard} />
        </Tab.Navigator>
      ) : (
        <AppStack.Navigator headerMode="none">
          <AppStack.Screen name="SignIn" component={SignIn} />
          <AppStack.Screen name="SignUp" component={SignUp} />
        </AppStack.Navigator>
      )}
    </NavigationContainer>
  );
}
