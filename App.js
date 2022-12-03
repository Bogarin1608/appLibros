import React from 'react'
import { BooksScreen } from './src/screens/BooksScreen'

import 'react-native-gesture-handler';
import { Libros } from './Libros';
import { AuthProvider } from './src/context/AuthProvider';

const App = () => {
  return (
    <AuthProvider>
      <Libros/>
    </AuthProvider>
  )
}

export default App