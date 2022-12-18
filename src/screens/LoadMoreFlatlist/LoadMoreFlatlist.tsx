//import liraries
import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Spacer from '../../components/Spacer';
import {getUserData} from '../../utils/api';
import {Img_Const} from '../../utils/asset';
import {windowWidth} from '../../utils/constraints';
import {userDataType} from '../../utils/types';
import RenderUserInfo from './RenderUserInfo';

// create a component
const LoadMoreFlatlist = () => {
  const [data, setData] = useState<userDataType[]>([]);

  useEffect(() => {
    callApi();
  }, []);

  const callApi = async () => {
    let result = await getUserData();
    setData(result);
  };

  const handleHeaderPress = () => {
    Alert.alert('Hii Sumit', 'Thank You for visiting us.');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          handleHeaderPress();
        }}
        style={styles.header}>
        <Image source={Img_Const.hamburger} style={styles.hamburger} />
        <Text style={styles.headerText}>Home</Text>
      </TouchableOpacity>
      <Spacer value={15} />
      <View style={styles.userRow}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={item => item?.id.toString()}
          renderItem={({item}) => (
            <RenderUserInfo
              fname={item?.firstName}
              lname={item?.lastName}
              profile={item?.picture}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // padding: 20,
    margin: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  hamburger: {
    width: 30,
    height: 30,
    marginLeft: -10,
  },
  userRow: {
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

//make this component available to the app
export default LoadMoreFlatlist;
