import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, FlatList } from 'react-native';
import { v4 as uuidv4 } from 'uuid';



import Header from './Componets/Header';
import AddItem from './Componets/AddItem';
import background from './Images/sunrise-in-the-smoky-mountains.jpg';
import ListItem from './Componets/ListItem';



const App = () => {

  const data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.image}>
        <Header
          title="Gotta get this done!" />
        <AddItem />
       <ListItem />

      </ImageBackground>
    </View>
  )
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  }
})

export default App;