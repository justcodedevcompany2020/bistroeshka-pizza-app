import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';

import NotAuthNavigators from './navigation/notAuthNavigators';
import TabNavigation from './navigation/tabNavigation';
import {StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
const App = () => {
  const [isAuth, setIsAuth] = useState(true);

  // useEffect(() => {

  // }, [])

  return (
    <NavigationContainer>
      <StatusBar
        hidden={false}
        backgroundColor={'white'}
        barStyle={'dark-content'}
      />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="TabNavigation" component={TabNavigation} />
        <Stack.Screen name="NotAuthNavigators" component={NotAuthNavigators} />
      </Stack.Navigator>
      {/* {isAuth ? < /> : < />} */}
    </NavigationContainer>
  );
};
export default App;
