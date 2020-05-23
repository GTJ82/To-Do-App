import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button } from 'react-native';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = ({ item, deleteItem }) => {



    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemView}>
                <Text style={styles.itemText}>{item}</Text>
            </View>
            <View style={styles.button}>
                <Button
                    title="remove"
                    onPress={() => deleteItem(item.id)} />
            </View>
        </TouchableOpacity>
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
