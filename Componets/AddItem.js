import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native';



const AddItem = (props) => {
    
    const [text, setText] = useState("");

    const onChange = inputVal => setText(inputVal);

console.log(text);


    
    return (
        <View style={styles.addItemView}>
            <TextInput
                style={styles.inputText}
                placeholder="Add item to list..."
                onChangeText={onChange}

            />
            <TouchableOpacity style={styles.button}>
                <Button title="Add Item" onPress={() => props.addItem(text)} />

            </TouchableOpacity>
        </View>

    );



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