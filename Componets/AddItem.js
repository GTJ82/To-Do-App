import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native';




const AddItem = (props) => {

    const [text, setText] = useState("");

    const onChange = inputVal => setText(inputVal);



    return (
        <View style={styles.addItemView}>
            <TextInput
                style={styles.inputText}
                placeholder="Add item to list..."
                onChangeText={onChange}
                clearTextOnFocus={true}

            />
            <TouchableOpacity style={styles.button}>
                <Button title="Add Item" color="black" onPress={() => props.addItem(text)} />
            </TouchableOpacity>
        </View>

    );



};


const styles = StyleSheet.create({
    addItemView: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputText: {
        fontSize: 20,
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 5,
        width: 250,
        height: 30,
        fontSize: 20,
        fontFamily: 'AppleSDGothicNeo-SemiBold',


    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        height: 35,
        width: 85,
        backgroundColor: "#bbc7ad",
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#99a191",
        marginLeft: 20,

    },

})

export default AddItem;