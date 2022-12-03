import React, { useState } from 'react'
import { ActivityIndicator, Button, Image, Linking, ScrollView, StyleSheet, Text, View } from 'react-native';

export const DownloadBooks = () => {

    const [Libros, setLibros] = useState(
[        {
            nombre: 'Jumper',
            Autor: 'Steven Gould',
            link: 'https://www.antupload.com/filed/KgID0tUC/Jumper+-+Steven+Gould',
            img: 'https://m.media-amazon.com/images/I/51zgr0SoemL.jpg'
        },

        {
            nombre: 'hábitos atómicos',
            Autor: 'James Clear',
            link: 'https://constitucionmundial.com/web/content/1573?unique=4df7e02ec1f221f3d983130edfef74572a0b5859&download=true',
            img: 'https://m.media-amazon.com/images/I/41rEurRr1uL._SY498_BO1,204,203,200_.jpg'
        },

        {
            nombre: 'Las Doce Llaves',
            Autor: 'María Villamayor',
            link: 'https://tweet.monster/books/es/xyz/8/Las-doce-llaves-Maria-Villamayor.pdf',
            img: 'https://m.media-amazon.com/images/I/51FZR87y-LL._SX355_BO1,204,203,200_.jpg'
        },

        {
            nombre: 'Roma soy yo',
            Autor: 'Santiago Posteguillo',
            link: 'https://editoresmadrid.org/wp-content/uploads/2022/05/ROMA-SOY-YO.pdf',
            img: 'https://m.media-amazon.com/images/I/719yqLXOmyL.jpg'
        },

        {
            nombre: 'IT',
            Autor: 'Stephen King',
            link: 'https://katavalast.files.wordpress.com/2014/05/it-eso.pdf',
            img: 'https://www.elsotano.com/imagenes_grandes/9786073/978607381400.JPG'
        },]
    )

  return (
    <ScrollView>
    <View style={ styles.container }>
     <Text style={ styles.text }>LIBROS DISPONIBLES PARA DESCARGAR</Text> 

     <View style={ styles.booksContainer }>
          {

              Libros === 'Vacio'
              ? <ActivityIndicator style={{  }} size='large' />
              :   Libros.map( libro => (
                      <View key={ libro.nombre } style={ styles.bookContainer }>
                          <Text style={ styles.titleBook }>{ libro.nombre }</Text>
                          <Text style={ styles.authorBook }>{ libro.Autor }</Text>
                          <Image
                              source={{
                              uri: libro.img,
                              }}
                              style={styles.image}
                          />
                          <Button onPress={()=>Linking.openURL(libro.link)} title='Descargar libro' />
                      </View>
              ))
          }
     </View>
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
        marginTop: 25
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
        height: 420,
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

