import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import ListItem from './ListItem';


const AddItem = () => {

    const[ item, setItem ] = useState("");

    const pressHandler = () => {
        setItem()
    }

    return (
        <View style={styles.addItemView}>
            <TextInput
                style={styles.inputText}
                placeholder="Add item to list..."
                onChangeText={(val) => setItem(val) }
                
                />
            <TouchableOpacity>
                <Text style={styles.text}><Icon name="plus" size={20} color="#94fc03" />   Add Item</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    addItemView: {
        flex: 1,

        alignItems: 'center'

    },
    inputText: {
        fontSize: 20,
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        width: 250,


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