import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../src/notAuthScreens/LoginScreen';
import RegisterScreen from './../src/notAuthScreens/RegisterScreen';
import ForgotPassword from '../src/notAuthScreens/ForgotPassword';
import ConfirmTellScreen from '../src/notAuthScreens/ConfirmTellScreen';
import NewPassword from '../src/notAuthScreens/NewPassword';
import ConfirmPhoneRegister from '../src/notAuthScreens/ConfirmPhoneRegister';

const Stack = createStackNavigator();

export default NotAuthNavigators = ({currentPage = ''}) => {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ConfirmTellScreen" component={ConfirmTellScreen} />
      <Stack.Screen name="NewPassword" component={NewPassword} />
      <Stack.Screen name="ConfirmPhoneRegister" component={ConfirmPhoneRegister} />
    </Stack.Navigator>
  );
};
