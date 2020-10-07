import React from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

const AppStack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Routes() {
  const isSignedIn = useSelector((state) => state.auth.signed);

  return (
    <NavigationContainer>
      {isSignedIn === true ? (
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: '#fff',
            inactiveTintColor: 'rgba(255,255,255,0.6)',
            style: {
              backgroundColor: '#8d41a8',
            },
          }}
        >
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarLabel: 'Meu Perfil',
              tabBarIcon: ({ color, size }) => (
                <Icon name="person" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Dashboard"
            component={Dashboard}
            options={{
              tabBarLabel: 'Agendamentos',

              tabBarIcon: ({ color, size }) => (
                <Icon name="event" size={size} color={color} />
              ),
            }}
          />
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
