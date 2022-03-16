import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'

const CustomInput = ({ value, setValue, placeholder, secureTextEntry, icon, first }) => {
    return (
        <View style={styles.container}>
            <View style={styles.inner}>
            <FontAwesomeIcon size={20} icon={icon} style={{height: 40, width: 10, marginTop: 12, marginLeft:10}} color="#9284ea"/>
            <TextInput
                autoCapitalize="none"
                autoFocus={first}
                width={240}
                value={value}
                onChangeText={setValue} 
                placeholder={placeholder} 
                style={styles.input} 
                secureTextEntry={secureTextEntry}
                />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        width: '100%',
        
        alignItems: 'center',
    },
    inner: {
        width: '70%',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#e8e8e8',
        borderRadius: 8,
        flexDirection: 'row',
        
    },
    input: {
        padding: 15,
    },
});

export default CustomInput