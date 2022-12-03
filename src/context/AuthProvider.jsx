import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { AuthContext } from './AuthContext'

export const AuthProvider = ({ children }) => {

    const userData = {
        name: null,
        status: 'checking',
        token: ''
    }

    const [User, setUser] = useState(userData)

    const onCheckingAuth = () => {
        setUser({
            name: null,
            status: 'checking',
            token: ''
        })
    }

    const onStartLogin = async(email, password) => {

        onCheckingAuth();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email, password: password })
        };

        await fetch(
            'https://mediplus.onrender.com/api/auth/', requestOptions)
            .then(response => {
                response.json()
                    .then(data => {
                        console.log(data.msg)
                        if( data.msg === 'Password incorrecta.' || data.msg === 'El usuario no existe con ese email.' || data.msg === 'Porfavor hable con el administrador'){
                            alert('Los datos de inicio de sesión no son correctos.')
                            return cerrarSesion();
                        }
                        setUser({
                            name: data.name,
                            status: 'auth',
                            token: data.token
                        })
                    })        
            });

            await AsyncStorage.setItem('token', User.token)
    }

    const onRegisterUser = async(email, password, name) => {

        onCheckingAuth();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email, name: name, password: password, rol: '633db4b66592d6ae560af1da', })
        };
        await fetch(
            'https://mediplus.onrender.com/api/auth/new', requestOptions)
            .then(response => {
                response.json()
                    .then(data => {
                        if( data.msg === 'Un usuario ya existe con ese correo.'){
                            alert('Un usuario ya existe con ese correo.')
                            return cerrarSesion();
                        }
                        setUser({
                            name: data.name,
                            status: 'auth',
                            token: data.token
                        })
                    })        
            });
            await AsyncStorage.setItem('token', User.token)
    }

    const onStartLogout = async() => {
        setUser({
            name: null,
            status: 'no-auth',
            token: ''
        })
        await AsyncStorage.removeItem('token')
    }

  return (
    <AuthContext.Provider value={{ User, onStartLogin, onRegisterUser, onStartLogout }}>
        { children }
    </AuthContext.Provider>
  )
}
