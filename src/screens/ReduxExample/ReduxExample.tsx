//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Spacer from '../../components/Spacer';
import {useAppDispatch, useAppSelecter} from './app/hooks';
import {
  amountAdded,
  incremented,
  changeLoggedIn,
} from './features/counter/counter-slice';
import ThunkExample from './ThunkExample';

// create a component
const ReduxExample = () => {
  const count = useAppSelecter(state => state.counter.value);
  const isLoggedIn = useAppSelecter(state => state.counter.isLoggedIn);
  const dispatch = useAppDispatch();

  const handlePress = () => {
    dispatch(incremented());
  };

  const handlePress2 = () => {
    dispatch(amountAdded(3));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Redux</Text>
      <Spacer />
      <Text>Count : {count}</Text>
      <Spacer />

      <View style={styles.trueFalseContainer}>
        <TouchableOpacity style={styles.btn} onPress={handlePress}>
          <Text>+1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={handlePress2}>
          <Text>+3</Text>
        </TouchableOpacity>
      </View>

      <Spacer value={30} />

      <Text>IsloggedIn: {JSON.stringify(isLoggedIn)}</Text>

      <Spacer />
      <View style={styles.trueFalseContainer}>
        <TouchableOpacity
          disabled={isLoggedIn}
          style={styles.btn}
          onPress={() => dispatch(changeLoggedIn(true))}>
          <Text>True</Text>
        </TouchableOpacity>

        <TouchableOpacity
          disabled={!isLoggedIn}
          style={styles.btn}
          onPress={() => {
            dispatch(changeLoggedIn(false));
          }}>
          <Text>False</Text>
        </TouchableOpacity>
      </View>
      <Spacer value={30} />
      <Text>Thunk Example</Text>
      <ThunkExample />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  btn: {
    width: 80,
    height: 40,
    backgroundColor: 'lightblue',
    borderWidth: 1,
    borderColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },

  trueFalseContainer: {
    flexDirection: 'row',
  },
});

//make this component available to the app
export default ReduxExample;
