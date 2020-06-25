import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';


const ListItem = ({ item, deleteItem }) => {



    return (

        <View style={styles.listItem}>
            <View style={styles.listItemView}>
                <Text style={styles.itemText}>{item.name}</Text>
            </View>
            <View style={styles.button}>
                <TouchableOpacity>
                    <Button title="Remove" color="black" onPress={() => deleteItem(item.id)} />
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
        justifyContent: 'center',
    },
    listItemView: {
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: "white",
        width: 250,
        height: 30,


    },
    itemText: {
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
    }

});

export default ListItem;
