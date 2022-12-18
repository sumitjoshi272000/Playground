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
  ActivityIndicator,
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
  const [page, setPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    callApi();
  }, []);

  const callApi = async () => {
    setLoading(true);
    try {
      let result = await getUserData(page);
      if (result) {
        setLoading(false);
        if (data.length >= 0) {
          setData([...data, ...result]); //merging next array with previous
        } else {
          setData(result);
        }
      } else {
        Alert.alert('Thank You', 'All Records Completed');
      }
      setPage(page + 1);
    } catch {
      setLoading(false);
      Alert.alert('Catch', 'No Data Found');
    }
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
          onEndReached={() => {
            callApi();
          }}
          onEndReachedThreshold={1}
        />
      </View>
      {loading ? (
        <View style={styles.loader}>
          <ActivityIndicator color={'blue'} size={'large'} />
          <Text style={{marginLeft: 5}}>Loading...</Text>
        </View>
      ) : null}
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    // flex: 1,
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
    marginBottom: 100,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  loader: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
});

//make this component available to the app
export default LoadMoreFlatlist;
