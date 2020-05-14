import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button, } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


const AddItem = () => {
    return (
        <View style={styles.addItem}>
            <TextInput style={styles.inputText} placeholder="Add item to list"/>
            <TouchableOpacity>
                <Text style={styles.text}><Icon name="plus" size={20} color="#94fc03"/>   Add Item</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    addItem: {
        flex: 1,
        
    },
    inputText: {
        fontSize: 20,
        backgroundColor: "white"
        
    },
    text: {
        color: '#fce803',
        paddingTop: 15,
        paddingLeft: 15
    },
    icon: {
        
    }
})

export default AddItem;