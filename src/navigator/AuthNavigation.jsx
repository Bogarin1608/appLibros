import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';

const Stack = createStackNavigator();

export const AuthNavigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Iniciar Sesion" component={LoginScreen} />
        <Stack.Screen name="Registrarse" component={RegisterScreen} />
    </Stack.Navigator>
  )
}
