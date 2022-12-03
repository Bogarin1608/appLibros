import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'

export const BooksScreen = () => {

    const [Libros, setLibros] = useState('Vacio');
    const [Registros, setRegistros] = useState(1)

    const onGetBooks = () => {

        const options = {method: 'GET'};

        fetch(`https://www.googleapis.com/books/v1/volumes?q='+search+'&maxResults=${ 10 * Registros }&key=AIzaSyBeNkzkdx6ojc8sFrqWnZtXZLlJiS9_1bc`, options)
        .then(response => response.json())
        .then(response => setLibros(response))
        .catch(err => console.error(err));
    }

    useEffect(() => {
      onGetBooks()
    }, [Registros])    

  return (
        <ScrollView>
      <View style={ styles.container }>
       <Text style={ styles.text }>PROXIMOS LIBROS DISPONIBLES</Text> 

       <View style={ styles.booksContainer }>
            {

                Libros === 'Vacio'
                ? <ActivityIndicator style={{  }} size='large' />
                :   Libros.items.map( libro => (
                        <View key={ libro.id } style={ styles.bookContainer }>
                            <Text style={ styles.titleBook }>{ libro.volumeInfo.title }</Text>
                            <Text style={ styles.authorBook }>{ libro.volumeInfo.authors }</Text>
                            <Image
                                source={{
                                uri: libro.volumeInfo.imageLinks.thumbnail,
                                }}
                                style={styles.image}
                            />
                        </View>
                ))
            }
       </View>
       <Pressable style={ styles.loadMore } onPress={ () => setRegistros( Registros + 1) }>
            <Text style={ styles.loadMoreText }>Cargar mas...</Text>
       </Pressable>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    text: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 25,
        marginTop: 25,
        padding: 10
    },

    booksContainer: {
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },

    bookContainer: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        
        elevation: 8,

        width: '70%',
        height: 380,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: '#fafafa',
        marginBottom: 15,
    },

    image :{
        marginBottom: 20,
        width: 200,
         height: 250
      },

      titleBook: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 15, 
        marginTop: 30, 
        padding: 5
      },

      authorBook: {
        color: 'black',
        fontSize: 15, 
        marginBottom: 15,
      }, 

      loadMore: {
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 20,
        backgroundColor: '#fafafa',
      },

      loadMoreText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15
      }
})

