import React from 'react';
import { Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import SignIn from './Signin';
import SignUp from './SignUp';

const RutasNoAutenticadas = StackNavigator(
    {
 SignIn: {
    screen: SignIn,
  },
  SignUp: {
    screen:SignUp,
  },
},
{
    headerMode: 'none',
  },
);

export { RutasNoAutenticadas };