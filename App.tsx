//import liraries
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import Route from './src/Route/Route';
import DarkLightTheme from './src/screens/DarkLightTheme/DarkLightTheme';

// create a component
const App = () => {
  return (
    <NavigationContainer>
      {/* <DarkLightTheme />*/}
      <Route />
      {/* <View>
        <Text>Hello</Text>
      </View> */}
    </NavigationContainer>
  );
};

//make this component available to the app
export default App;
