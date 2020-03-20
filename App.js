import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

// Import scenes
import WelcomeScreen from './screens/welcome/welcome.js';
import HomeScreen from './screens/home.js';
import NewUserScreen from './screens/newuser.js';
import BeginScreen from './screens/begin.js';
import Q1Screen from './screens/q1.js';
import Q2Screen from './screens/q2.js';
import EndScreen from './screens/end.js';
import FourHScreen from './screens/4h/4h.js';
import PastEntriesScreen from './screens/past_entries.js';
import ResponseScreen from './screens/response.js';

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
  FourH: {
    screen: FourHScreen,
  },
  PastEntries: {
    screen: PastEntriesScreen,
  },
  Response: {
    screen: ResponseScreen,
  },
},
{
  mode: 'modal',
  headerMode: 'none',
});
console.disableYellowBox = true;
export default createAppContainer(App);
