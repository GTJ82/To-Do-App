
import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, FlatList } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { uuid } from 'uuidv4';




import Header from './Componets/Header';
import AddItem from './Componets/AddItem';
import background from './Images/sunrise-in-the-smoky-mountains.jpg';
import ListItem from './Componets/ListItem';



const App = () => {



  const [item, setItems] = useState([
    // {
    //   id: uuidv4(),
    //   name: ''
    // },
    {
      id: uuidv4(),
      name: "gym"
    },
    {
      id: uuidv4(),
      name: "study"
    }
  ]);
// console.log(item);

  const addItems = (text) => {
    setItems(prevItems => {
      return [{ id: uuidv4(), name: text }, ...prevItems]

    })
  }

  const deleteItem = (id) => {
    setItems(prevVal => {
      return prevVal.filter(item => item.id != id)
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
          renderItem={({ item }) => (
            <ListItem item={item.name} deleteItem={deleteItem} />
          )}
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