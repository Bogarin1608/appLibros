
import { useNavigation } from '@react-navigation/native'
import React, { useContext, useState } from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import { PERMISSIONS, request } from 'react-native-permissions';

export const RegisterScreen = () => {

  const { onRegisterUser } = useContext( AuthContext );

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const onRegister = () => {

        const emailValidation = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
        if( emailValidation.test(email) === false ) return alert('Ingresa un email válido');
        if( password.length < 5 ) return alert('La contraseña debe contener minimo 5 carácteres');
        onRegisterUser(email.toLowerCase().trim(), password.trim(), nombre);
        request(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE).then((resp) => { console.log(resp) })
      }


  return (
    <View style={ styles.container }>
    <Image
        source={{
        uri: 'https://play-lh.googleusercontent.com/M3hP94HRnTRPpiaMAfD8hortds_l1BGg5I7GuiUUlFlxLFop5wC4jYYp6eSB0fao0w=w240-h480-rw',
        }}
        style={styles.image}
    />

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Ingresa tú nombre..."
            placeholderTextColor="#003f5c"
            onChangeText={nombre => setNombre(nombre)}
          />
        </View>

    <View style={styles.inputView}>
        <TextInput
        style={styles.TextInput}
        placeholder="Ingresa tú email..."
        placeholderTextColor="#003f5c"
        autoComplete='email'
        onChangeText={email => setEmail(email)}
        />
    </View>

    <View style={styles.inputView}>
        <TextInput
        style={styles.TextInput}
        placeholder="Ingresa password..."
        placeholderTextColor="#003f5c"
        autoComplete='email'
        secureTextEntry={true}
        onChangeText={password => setPassword(password)}
        />
    </View>

    <TouchableOpacity onPress={ () => onRegister() } style={styles.loginBtn}>
    <Text style={styles.loginText}>REGISTRARSE</Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={ () => navigation.navigate('Iniciar Sesion') } style={styles.registerBtn}>
    <Text style={styles.loginText}>INICIAR SESION</Text>
  </TouchableOpacity>
  <Text style={styles.registerText}>¿No tienes una cuenta?</Text>
</View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    image :{
        marginBottom: 40,
        width: 100,
         height: 100
      },

      inputView: {
        backgroundColor: "#42a5f5",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
      },
      
      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        color: 'white',
      },

      loginBtn: {
        width:"80%",
        borderRadius:25,
        height: 40,
        width: 190,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        backgroundColor:"#1976d2",
    },
    
    registerBtn: {
        width:"80%",
        borderRadius:25,
        height: 40,
        width: 160,
        alignItems:"center",
        justifyContent:"center",
        marginTop:30,
        marginBottom: 10,
        backgroundColor:"#ff5722",
    },

    registerText: {
        height: 30,
        marginBottom: 30,
      },


    loginText: {
        color: 'white',
        fontWeight: 'bold',
    }
})
