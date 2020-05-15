import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, FlatList } from 'react-native';
import { v4 as uuidv4 } from 'uuid';



import Header from './Componets/Header';
import AddItem from './Componets/AddItem';
import background from './Images/sunrise-in-the-smoky-mountains.jpg';
import ListItem from './Componets/ListItem';



const App = () => {

  const [item, setItems] = useState([
    { id: 1, name: "work" },
    { id: 2, name: "gym" },
    { id: 3, name: "shop" },
  ])

  


  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.image}>
        <Header
          title="Gotta get this done!" />
        <AddItem />
        <FlatList
          data={item}
          renderItem={({ item }) => <ListItem item={item.name} />}
          
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