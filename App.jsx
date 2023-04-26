import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';

import NotAuthNavigators from './navigation/notAuthNavigators';
import TabNavigation from './navigation/tabNavigation';
import {StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {store} from './store';
const Stack = createStackNavigator();
const App = () => {
  const [isAuth, setIsAuth] = useState(true);

  // useEffect(() => {

  // }, [])

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar
          hidden={false}
          backgroundColor={'white'}
          barStyle={'dark-content'}
        />
        <Stack.Navigator
          initialRouteName="NotAuthNavigators"
          screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="NotAuthNavigators"
            component={NotAuthNavigators}
          />
          <Stack.Screen name="TabNavigation" component={TabNavigation} />
        </Stack.Navigator>
        {/* {isAuth ? < /> : < />} */}
      </NavigationContainer>
    </Provider>
  );
};
export default App;
