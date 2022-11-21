//import liraries
import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet, Appearance} from 'react-native';

// create a component
const DarkLightTheme = () => {
  const [theme, setTheme] = useState<string>('LIGHT');
  useEffect(() => {
    // const colorTheme = Appearance.getColorScheme();
    const listener = Appearance.addChangeListener(colorThemee => {
      console.log(colorThemee);
      if (colorThemee.colorScheme === 'light') {
        setTheme('LIGHT');
      } else {
        setTheme('DARK');
      }
    });

    return () => {
      listener;
    };
  });

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: theme === 'DARK' ? '#000000' : '#FFFFFF'},
      ]}>
      <Text
        style={{color: theme === 'DARK' ? '#FFFFFF' : '#000000', fontSize: 20}}>
        Switch the dark / light theme in your system settings and see result
        here!
      </Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

//make this component available to the app
export default DarkLightTheme;
