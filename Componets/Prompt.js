import React from 'react';
import { View, Text, StyleSheet } from "react-native";

const Prompt = () => {
    return (
        <View style={styles.promptView}>
            <Text style={styles.promptText}>Add some things to do today</Text>
        </View>
    )
};

const styles = StyleSheet.create({

    promptText: {
        fontSize: 30,
    },
    promptView: {
        
        alignItems: "center",
        
    }
});



export default Prompt;
