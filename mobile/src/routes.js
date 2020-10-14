/* eslint-disable react/prop-types */
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import SelectProvider from './pages/New/SelectProvider';
import SelectDateTime from './pages/New/SelectDateTime';
import Confirm from './pages/New/Confirm';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

const AppStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function New() {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTintColor: '#fff',
        headerLeftContainerStyle: { marginLeft: 20 },
      }}
    >
      <AppStack.Screen
        name="SelectProvider"
        component={SelectProvider}
        options={({ navigation }) => ({
          headerTitle: 'Selecione o Prestador',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Dashboard');
              }}
            >
              <Icon name="chevron-left" size={20} color="#fff" />
            </TouchableOpacity>
          ),
        })}
      />
      <AppStack.Screen
        name="SelectDateTime"
        component={SelectDateTime}
        options={({ navigation }) => ({
          headerTitle: 'Selecione o horário',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="chevron-left" size={20} color="#fff" />
            </TouchableOpacity>
          ),
        })}
      />
      <AppStack.Screen
        name="Confirm"
        component={Confirm}
        options={({ navigation }) => ({
          headerTitle: 'Confirmar Agendamento',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="chevron-left" size={20} color="#fff" />
            </TouchableOpacity>
          ),
        })}
      />
    </AppStack.Navigator>
  );
}

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

          <AppStack.Screen
            name="New"
            component={New}
            options={{
              tabBarLabel: 'Agendar',
              tabBarIcon: ({ color, size }) => (
                <Icon name="add-circle-outline" size={size} color={color} />
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
