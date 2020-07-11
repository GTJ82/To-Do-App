import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ImageBackground, FlatList, Alert } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'

// Componets //
import Header from './Componets/Header';
import AddItem from './Componets/AddItem';
import ListItem from './Componets/ListItem';

// Images //
import background from './Images/sunrise-in-the-smoky-mountains.jpg';
import background2 from './Images/mountains_afternoon.jpeg'



const App = () => {

  const [item, setItems] = useState([
    {
      id: uuidv4(),
      name: ''
    },
  ]);
  // console.log(item);

  const [image, setImage] = useState(background)
  // const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios('https://api.openweathermap.org/data/2.5/weather?q=charlotte,north carolina&appid=b8c9d4a9c8777417e7ed2767ad7f931d&units=imperial')

      console.log(result.data);
      // isLoading(false);

    }
    fetchItems();
  }, [])




  const imageDisplay = () => {

    var date = new Date();
    var current_hour = date.getHours();
    if (current_hour <= 11) {
      image(background)
    } else if (current_hour < 17) {
      setImage(background2)
    } else {
      setImage(background3)
    }

  };
  // imageDisplay()




  const addItems = (text) => {

    if (!text) {
      Alert.alert('Error', "How can I add something that's not there??", { text: 'ok' })
    } else {
      setItems(prevItems => {
        return [{ id: uuidv4(), name: text }, ...prevItems]

      })
    }
  }

  const deleteItem = (id) => {
    setItems((prev) => {
      return prev.filter(item => item.id !== id)

    })
  }


  // useEffect(() => {
  //   fetch('https://api.openweathermap.org/data/2.5/weather?q=charlotte,north carolina&appid=b8c9d4a9c8777417e7ed2767ad7f931d&units=imperial')
  //     .then(res => res.json())
  //     .then(json => {
  //       // setCurrent(json.results)
  //       console.log(json.results)
  //     })
  //     .catch((error) => console.error(error))

  // }, [])



  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Header
          title="Gotta get this done!" />
        <AddItem
          addItem={addItems}
        />
        <FlatList
          data={item}
          renderItem={({ item }) => {
            if (item.name === null) {
              return (
                <Prompt />
              )
            } else {
              return (
                <ListItem item={item} deleteItem={deleteItem} />
              )
            }
          }}
        />
      </ImageBackground>
    </View>
  )
};



const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  }
})

export default App;