import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const CustomButton = ({ onPress, text, type, bgColor, textColor }) => {
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
                
                
                <Text style={[
                    styles.text, 
                    styles[`container_${text}`],
                    textColor ? {color: textColor} : {}
                    ]}>{text}
                </Text>

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
        borderWidth: 0,
        borderColor: '#e8e8e8',
        borderRadius: 8,
    },
    container_SECONDARY: {
        backgroundColor: 'white',
        marginTop: 10,
        borderColor: '#5E17EB',
        borderWidth: 2,
        color: '#5E17EB',
        borderRadius: 8,
    },
    container_TERTIARY: {
        marginTop: -5,
    },
    inner: {
        width: '70%',
        
        
        alignItems: 'center'
    },
    text: {
        padding: 15,
        fontWeight: 'bold',
        color: 'white',
    },
    text_TERTIARY: {
        
    },
    
});

export default CustomButton;