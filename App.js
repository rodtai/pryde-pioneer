import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import WelcomeScreen from './screens/welcome';
import HomeScreen from './screens/home';
import NewUserScreen from './screens/newuser';
import BeginScreen from './screens/begin';
import Q1Screen from './screens/q1';
import Q2Screen from './screens/q2';
import EndScreen from './screens/end';
import { createAppContainer } from 'react-navigation';

const App = createStackNavigator({
  Welcome: {
    screen: WelcomeScreen,
  },
  Home: {
    screen: HomeScreen,
  },
  NewUser: {
    screen: NewUserScreen,
  },
  Begin: {
    screen: BeginScreen,
  },
  Q1: {
    screen: Q1Screen,
  },
  Q2: {
    screen: Q2Screen,
  },
  End: {
    screen: EndScreen,
  },
},
{
  mode: 'modal',
  headerMode: 'none',
});

export default createAppContainer(App);
