import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button, } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


const TodoItem = () => {
    return (
        <View>
            <TextInput style={styles.inputText} placeholder="Add item to list"/>
            <TouchableOpacity>
                <Text style={styles.text}><Icon name="plus" size={20}/>Add Item</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    inputText: {
        fontSize: 20,
        
        
    },
    text: {
        color: '#1B6F45'
    }
})

export default TodoItem;