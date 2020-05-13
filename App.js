import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { v4 as uuidv4 } from 'uuid';



import Header from './Componets/Header';
import TodoItem from './Componets/Todoitem';
import background from './Images/sunrise-in-the-smoky-mountains.jpg'


// const deleteItem = (id) => {
//   setItems(prevItems => {
//     return prevItems.filter(item => item.id != id)
//   })
// }

// const addItem = (id) => {
//   setItems(prevItems) => {
//     return (

//     )
//   }
// }

const App = () => {

  // const { items, setItems } = useState([
  //   { id: uuidv4(), text: "" }
  // ]);


  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.image}>
        <Header
          title="Gotta get this done!" />
        <TodoItem />
        
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