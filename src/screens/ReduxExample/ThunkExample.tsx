import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUsers} from './features/counter/user-slice';
import {AppDispatch, RootState} from './app/store';
import {
  ActivityIndicator,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const ThunkExample = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {users, loading} = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" style={styles.loader} />;
  }

  return (
    <SafeAreaView style={styles.mainContainter}>
      <Button title={'Reload'} onPress={() => dispatch(fetchUsers())} />
      {users.map(user => {
        return (
          <View style={styles.container} key={user.id}>
            <View>
              <View style={styles.dataContainer}>
                <Text>
                  {user.first_name} {user.last_name}
                </Text>
              </View>
              <View style={styles.dataContainer}>
                <Text>{user.email}</Text>
              </View>
            </View>
          </View>
        );
      })}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainter: {
    flex: 1,
    marginHorizontal: 20,
  },
  container: {
    marginVertical: 20,
  },
  dataContainer: {},
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ThunkExample;
