import React from 'react';
import { View, Text, Stylesheet, StyleSheet } from 'react-native';

const Header = ({ title }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: "skyblue",
        height: 75,
        padding: 15

    },
    text: {
        fontSize: 30,
        textAlign: 'center',

    }
});


export default Header;