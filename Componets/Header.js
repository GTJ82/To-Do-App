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
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 25

    },
    text: {

        fontSize: 30,
        textAlign: 'center',
        color: '#fce803'

    }
});


export default Header;