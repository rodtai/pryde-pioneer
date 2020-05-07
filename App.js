import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createStackNavigator } from 'react-navigation-stack';
// import { createAppContainer } from 'react-navigation';

// Import scenes
import WelcomeScreen from 'pioneer/screens/welcome/welcome.js';
import HomeScreen from 'pioneer/screens/home/home.js';
import NewUserScreen from 'pioneer/screens/newuser/newuser.js';
import BeginScreen from 'pioneer/screens/begin/begin.js';
import Q1Screen from 'pioneer/screens/q1/q1.js';
import Q2Screen from 'pioneer/screens/q2/q2.js';
import EndScreen from 'pioneer/screens/end/end.js';
import FourHScreen from 'pioneer/screens/4h/4h.js';
import PastEntriesScreen from 'pioneer/screens/past_entries/past_entries.js';
import ResponseScreen from 'pioneer/screens/response/response.js';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NewUser" component={NewUserScreen} />
        <Stack.Screen name="Begin" component={BeginScreen} />
        <Stack.Screen name="Q1" component={Q1Screen} />
        <Stack.Screen name="Q2" component={Q2Screen} />
        <Stack.Screen name="End" component={EndScreen} />
        <Stack.Screen name="FourH" component={FourHScreen} />
        <Stack.Screen name="PastEntries" component={PastEntriesScreen} />
        <Stack.Screen name="Response" component={ResponseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

console.disableYellowBox = true;
export default App;

// const App = createStackNavigator({
//   Welcome: {
//     screen: WelcomeScreen,
//   },
//   Home: {
//     screen: HomeScreen,
//   },
//   NewUser: {
//     screen: NewUserScreen,
//   },
//   Begin: {
//     screen: BeginScreen,
//   },
//   Q1: {
//     screen: Q1Screen,
//   },
//   Q2: {
//     screen: Q2Screen,
//   },
//   End: {
//     screen: EndScreen,
//   },
//   FourH: {
//     screen: FourHScreen,
//   },
//   PastEntries: {
//     screen: PastEntriesScreen,
//   },
//   Response: {
//     screen: ResponseScreen,
//   },
// },
// {
//   mode: 'modal',
//   headerMode: 'none',
// });
// export default createAppContainer(App);
