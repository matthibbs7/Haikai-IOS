import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, Alert, Dimensions } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import GoogleButton from '../../components/GoogleButton';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faCircleExclamation, faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import TextLogo from '../../../assets/images/haikaitext1.png';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify'
import BottomWave from '../../components/BottomWave';
import TopWave from '../../components/TopWave';

const windowHeight = Dimensions.get('window').height;


const ForgotPasswordScreen = () => {
    const {control, handleSubmit} = useForm();

    const navigation = useNavigation();

    const onSendPressed = async (data) => {

        try {
            await Auth.forgotPassword(data.username);
            navigation.navigate('NewPassword');
        } catch (e) {
            Alert.alert("Oops", e.message);
        }

    }


    const onSignInPressed = () => {
        navigation.navigate('SignIn');
    }

    const {height} = useWindowDimensions();
    
    
    return (

        <View style={styles.maincontainer}>

        <TopWave/>

        <View style={styles.root}>
            
            <Image source={TextLogo} style={[styles.logo, {height: height * 0.3}]} resizeMode="contain" />
            <Text style={styles.title}>Reset your password</Text>
                <CustomInput name="username" control={control} rules={{ required: 'Username is required' }} placeholder="Username &#9;&#9;&#9;&#9;&#9;"  icon={faCircleExclamation} />
                
            
            <CustomButton  text="Send" onPress={handleSubmit(onSendPressed)} type="PRIMARY"/>
            
            
            

            <CustomButton  
                text="Back to Sign in" 
                onPress={onSignInPressed}
                type="PRIMARY" 
                textColor='white'
                />
        
        </View>
        <BottomWave />
        </View>


    );
};

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#d6d7ff',
        height: windowHeight - 100,
        marginTop: 100,
    },
    logo: {
        width: '100%',
        maxWidth: 500,
        maxHeight: 480,
        marginBottom: -65
    },
    title: {
        
        fontSize: 28,
        fontWeight: 'bold',
        color: '#4700d4',
        margin: 10,
        alignSelf: 'center'
    },
    maincontainer: {
        backgroundColor: '#d6d7ff'
    }
})

export default ForgotPasswordScreen