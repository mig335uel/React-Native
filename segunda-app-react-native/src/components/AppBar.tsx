import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AppBar(){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>My App</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        paddingTop: 50,
        paddingBottom: 10,
        backgroundColor: '#6200ee',
        alignItems: 'center',
        justifyContent: 'center',

    },

    text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        
    }
});