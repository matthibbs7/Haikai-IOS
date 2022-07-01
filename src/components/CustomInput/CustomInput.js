import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { Controller } from 'react-hook-form';

const CustomInput = ({ control, name, rules = {}, placeholder, secureTextEntry, icon }) => {
    return (
        

            <Controller 
                control={control}
                name={name}
                rules={rules}
                render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
                    <View style={styles.container}>
                            <View style={[styles.inner, {borderColor: error ? 'red' : '#5E17EB'}, {borderWidth: error ? 1 : 0}]}>
                            <FontAwesomeIcon size={20} icon={icon} style={{height: 40, width: 10, marginTop: 12, marginLeft:10}} color="#6f71fc"/>
                                <TextInput 
                                    value={value} 
                                    onChangeText={onChange} 
                                    onBlur={onBlur} 
                                    placeholder={placeholder}
                                    style={[styles.input]}
                                    secureTextEntry={secureTextEntry}
                                    width={230}
                                    placeholderTextColor="grey"
                                />
                            </View>
                            { error && (<Text style={{color: 'red', alignSelf: 'stretch', marginHorizontal: 60, paddingTop: 0}}>{error.message || 'Error'}</Text>)}
                     </View>
                )}
            />
            
            
        
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        width: '100%',
        
        alignItems: 'center',
    },
    inner: {
        width: '70%',
        backgroundColor: 'white',
        borderWidth: 0,
        borderColor: '#5E17EB',
        borderRadius: 8,
        flexDirection: 'row',
        
    },
    input: {
        padding: 15,
    },
});

export default CustomInput