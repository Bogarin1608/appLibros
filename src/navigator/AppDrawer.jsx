import React, { useContext } from 'react'

import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { BooksScreen } from '../screens/BooksScreen';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';
import { DownloadBooks } from '../screens/DownloadBooks';

const Drawer = createDrawerNavigator();

export const AppDrawer = () => {

  const navigation = useNavigation()

  return (
    <Drawer.Navigator
     drawerContent={ () => <MenuInterno/> }
    >
        <Drawer.Screen name="Libros"  component={BooksScreen} />
        <Drawer.Screen name="Descargar Libros"  component={DownloadBooks} />
    </Drawer.Navigator>
    // <Drawer.Navigator>
    //     <Drawer.Screen name="Libros" component={BooksScreen} />
    //     <Drawer.Screen onPress={ ()=>console.log('Hola') } name="Cerrar Sesion" component={BooksScreen} />
    // </Drawer.Navigator>
  )
}

const MenuInterno = () => {

  
  const { onStartLogout, User } = useContext(AuthContext)
  console.log(User)
  const navigation = useNavigation();

  return (
     <DrawerContentScrollView>
          <View style={ styles.avatarContainer }>
              <Image source={{
                  uri: 'https://www.pngkit.com/png/full/302-3022217_roger-berry-avatar-placeholder.png',
              }} 
                  style={ styles.avatar }
              />
          </View>

          <View style={ styles.menuContainer }>
              <TouchableOpacity onPress={ () => navigation.navigate( 'Libros' ) } style={ styles.menuBoton }>
                  <Text style={styles.menuContent}>Libros</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={ () => navigation.navigate( 'Descargar Libros' ) } style={ styles.menuBoton }>
                  <Text style={styles.menuContent}>Descargar Libros</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={ () => onStartLogout() } style={ styles.menuBoton }>
                  <Text style={styles.menuContent}>Cerrar sesion</Text>
              </TouchableOpacity>
          </View>
     </DrawerContentScrollView>
  );
}

export const styles = StyleSheet.create({
  globalMargin: {
      marginHorizontal: 20
  },

  title: {
      fontSize: 30,
      marginBottom: 10,
      color: 'black'
  },

  botonGrande: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 20,
    alignItems: 'center', 
    justifyContent: 'center',
    marginRight: 10
  },

  botonGrandeTexto: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold'
  },

  avatarContainer: {
      alignItems: 'center',
      marginTop: 20
  },  

  avatar: {
      width: 150,
      height: 150
  },

  menuContainer: {
      marginVertical: 30,
      marginHorizontal: 30,
  },

  menuContent: {
      fontSize: 20,
      color: 'black',
  },

  menuBoton: {
      marginVertical: 8
  },


});