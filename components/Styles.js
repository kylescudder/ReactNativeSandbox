import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        margin: 20
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderRadius: 10
    },
    content: {
        backgroundColor: '#BD4E13',
        padding: 10,
        borderRadius: 10,
        margin: 10,
        width: '80%'
    },
    contentText: {
        paddingBottom: 20,
    },
    buttons: {
        margin: 20,
        padding: 20,
        backgroundColor: "#841584"
    },
    buttonText: {
        color: '#f8f8ff'
    }
});