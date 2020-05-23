import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = ({ title }) => {



    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemView}>
                <Text style={styles.itemText}>{title}</Text>
                {/* <Icon

                    name='times'
                    color='red'
                    size={25}>
                </Icon> */}


            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    listItem: {
        alignItems: 'center',
        height: 40,


    },
    listItemView: {
        width: 300,
        borderWidth: 1,
        justifyContent: 'center',
        flexDirection: 'row',


       
        backgroundColor: "white",

    },

});

export default ListItem;
