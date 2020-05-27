import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';


const ListItem = ({ item, deleteItem }) => {

    

    return (

        <View style={styles.listItem}>
            <View style={styles.listItemView}>
                <Text style={styles.itemText}>{item.name}</Text>
            </View>
            <View style={styles.button}>
                <TouchableOpacity onPress={() => deleteItem(item.id)}>
                    <Text>Remove</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

};

const styles = StyleSheet.create({
    listItem: {
        alignItems: 'center',
        height: 40,
        flexDirection: 'row',
    },
    listItemView: {
        width: 300,
        borderWidth: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: "white",


    },
    button: {
        borderWidth: 1,
    }

});

export default ListItem;
