import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import ListItem from './ListItem';


const AddItem = () => {

    const [item, setItem] = useState("");

    const pressHandler = () => {
        setItem()
    }

    return (
        <View style={styles.addItemView}>
            <TextInput
                style={styles.inputText}
                placeholder="Add item to list..."
                onChangeText={(val) => setItem(val)}

            />
            <TouchableOpacity style={styles.button}>
                <Button title="Add Item" />
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    addItemView: {
        flex: 1,
        flexDirection: "row",
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
    button: {
        alignItems: "center",
        justifyContent: "center",
        height: 40,
        backgroundColor: "#bbc7ad",
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#99a191",
        marginLeft: 20,
    }
})

export default AddItem;