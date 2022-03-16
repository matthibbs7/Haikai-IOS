import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'


const GoogleButton = ({ onPress, text, type, bgColor, fgColor, icon }) => {
    return (
        <View style={styles.container}>
            <Pressable 
                onPress={onPress} 
                style={ ({ pressed }) => [
                    pressed ? { opacity: 0.8} : {},
                    [
                    styles.inner, 
                    styles[`container_${type}`],
                    bgColor ? {backgroundColor: bgColor} : {},
                ]]}>
                
                <FontAwesomeIcon size={20} icon={icon} style={{height: 40, width: 10, marginHorizontal:0}} color="#DD4D44"/>
                <Text style={[
                    styles.text, 
                    styles[`container_${text}`],
                    fgColor ? {color: fgColor} : {}
                    ]}>{text}</Text>
            </Pressable>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        
        alignItems: 'center',
    },
    container_PRIMARY: {
        marginTop:10,
        backgroundColor: '#5E17EB',
        borderWidth: 1,
        borderColor: '#e8e8e8',
        borderRadius: 8,
    },
    container_TERTIARY: {
        marginTop: 5,
    },
    inner: {
        width: '70%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        padding: 15,
        fontWeight: 'bold',
        color: 'white',
    },
    text_TERTIARY: {
        color: 'gray',
    },
    
});

export default GoogleButton;