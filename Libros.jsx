import React, { useContext, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { AppDrawer } from './src/navigator/AppDrawer';
import { AuthNavigation } from './src/navigator/AuthNavigation';
import { AuthContext } from './src/context/AuthContext';
import { useToken } from './src/hooks/useToken';
import { ActivityIndicator, Text } from 'react-native';

export const Libros = () => {

  const { User } = useContext( AuthContext )
  const { onCheckToken } = useToken()

  useEffect(() => {
    onCheckToken()
  }, [])

  if( User.status === 'checking' ){
    return <ActivityIndicator style={{  }} size='large' />
  }

  return (
    <NavigationContainer>
      {
        User.status === 'auth'
        ? <AppDrawer/>
        : <AuthNavigation/>
      }
    </NavigationContainer>
  )
}
