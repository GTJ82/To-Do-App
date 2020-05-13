import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Header from './Componets/Header';
import TodoItem from './Componets/Todoitem';

const App = () => {
  return (
    <View style={styles.container}>
      <Header 
      title="Gotta get this done!"/>
      <TodoItem />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  }
})

export default App;