//import liraries
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import Route from './src/Route/Route';
import DarkLightTheme from './src/screens/DarkLightTheme/DarkLightTheme';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/screens/ReduxExample/app/store';
LogBox.ignoreAllLogs(); //Ignore all log notifications

// create a component
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </Provider>
  );
};

//make this component available to the app
export default App;
