import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, Alert, Dimensions } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import GoogleButton from '../../components/GoogleButton';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faLock, faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import TextLogo from '../../../assets/images/haikaitext1.png';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify';
import BottomWave from '../../components/BottomWave';
import TopWave from '../../components/TopWave';

const EMAIL_REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

const windowHeight = Dimensions.get('window').height;


const SignUpScreen = () => {
    const {control, handleSubmit, watch} = useForm();
    const pwd = watch('password');
    const navigation = useNavigation();
    
    const onRegisterPressed = async (data) => {
        const {username, password, email} = data;
        try {
            const response = await Auth.signUp({
                username,
                password,
                attributes: {email}
            });
            
            navigation.navigate('ConfirmEmail', {username});
        } catch(e) {
            Alert.alert('Oops', e.message);
        }
        
    }

    const onSignInGoogle = async () => {
        try { 
            await Auth.federatedSignIn({ provider: "Google" })
        } catch(e) {
            Alert.alert('Google error');
        }
    }


    const onSignInPressed = () => {
        navigation.navigate('SignIn')
    }

    const {height} = useWindowDimensions();
    
    
    return (
        
        <View style={styles.maincontainer}>

        <TopWave/>

            <View style={styles.root}>
                
                <Image source={TextLogo} style={[styles.logo, {height: height * 0.3}]} resizeMode="contain" />
                <Text style={styles.title}>Create an Account</Text>
                
                    <CustomInput name="username" control={control} placeholder="Username*&#9;&#9;&#9;&#9;&#9;" icon={faUser} rules={{required: 'Username is required', minLength: {value: 4, message: "Username must be at least 4 characters"}, maxLength: {value: 20, message: "Username must under 20 characters"}}}/>
                    <CustomInput name="email" control={control} placeholder="Email*&#9;&#9;&#9;&#9;&#9;" icon={faEnvelope} rules={{required: 'Email is required', pattern: {value: EMAIL_REGEX, message: "Email is invalid"}}}/>
                    <CustomInput name="password" control={control} placeholder="Password*&#9;&#9;&#9;&#9;&#9;" secureTextEntry={true} icon={faKey} rules={{required: 'Password is required', minLength: {value: 8, message: "Password must be at least 8 characters"}, maxLength: {value: 30, message: "Password must under 30 characters"}}}/>
                    <CustomInput name="repeat-password" control={control} placeholder="Confirm Password*&#9;&#9;&#9;&#9;&#9;" secureTextEntry={true} icon={faLock} rules={{validate: value => value === pwd || 'Passwords do not match'}}/>
                
                <CustomButton  text="Register" onPress={handleSubmit(onRegisterPressed)} type="PRIMARY"/>
                
                
                
                <GoogleButton  text="Sign Up with Google" onPress={onSignInGoogle} type="PRIMARY" bgColor="#FAE9EA" fgColor="#DD4D44" icon={faGoogle} iconColor="#DD4D44"/>

                
                <CustomButton  
                    text="Have an account? Sign in" 
                    onPress={onSignInPressed}
                    type="TERTIARY" 
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
        marginBottom: -90
    },
    title: {
        
        fontSize: 28,
        fontWeight: 'bold',
        color: '#4700d4',
        margin: 10,
        alignSelf: 'center'
    },
    maincontainer: {
        backgroundColor: '#d6d7ff',
    }
})

export default SignUpScreen