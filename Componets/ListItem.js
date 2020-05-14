import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = (props) => {
    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemView}>
                <Text style={styles.text}>{props.items}</Text>
                <Icon

                    name='times'
                    color='red'
                    size={25}>
                </Icon>


            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    listItem: {

        height: 40,
        bottom: 300,
        opacity: .8,


    },
    listItemView: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',

    },
    text: {
        fontSize: 30,
        color: '#fce803',
        paddingRight: 20,

    },


});

export default ListItem;
