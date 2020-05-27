import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, FlatList, Alert } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';



import Header from './Componets/Header';
import AddItem from './Componets/AddItem';
import background from './Images/sunrise-in-the-smoky-mountains.jpg';
import ListItem from './Componets/ListItem';
import Prompt from './Componets/Prompt';


const App = () => {

  const [item, setItems] = useState([
    {
      id: uuidv4(),
      name: ''
    },
  ]);

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


  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.image}>
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