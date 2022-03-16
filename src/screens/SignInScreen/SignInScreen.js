import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import Logo from '../../../assets/images/pindar_logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import GoogleButton from '../../components/GoogleButton';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'


const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSignInPressed = () => {
        console.warn("Sign in");
    }

    const onForgotPasswordPressed = () => {
        console.warn("Forgot password");
    }

    const onSignInGoogle = () => {
        console.warn('google')
    }

    const onSignUpPress = () => {
        console.warn("onSignUpPress")
    }


    const {height} = useWindowDimensions();
    
    return (
        <View stye={styles.root}>
            
            <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} resizeMode="contain" />

            <CustomInput placeholder="Username&#9;&#9;&#9;&#9;&#9;" value={username} setValue={setUsername} icon={faUser} first={true}/>
            <CustomInput placeholder="Password&#9;&#9;&#9;&#9;&#9;" value={password} setValue={setPassword}  secureTextEntry={true} icon={faLock} first={false}/>

            <CustomButton  text="Sign In" onPress={onSignInPressed} type="PRIMARY"/>
            
            
            <GoogleButton  text="Sign In with Google" onPress={onSignInGoogle} type="PRIMARY" bgColor="#FAE9EA" fgColor="#DD4D44" icon={faGoogle}/>

            
            <CustomButton  
                text="Don't have an account? Create one" 
                onPress={onSignUpPress}
                type="TERTIARY" 
                textColor='white'
                />

            <CustomButton  
                text="Forgot password?" 
                onPress={onForgotPasswordPressed}
                type="TERTIARY"
                textColor='white' 
                />
        
        </View>


    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '100%',
        maxWidth: 500,
        maxHeight: 480,
    }
})

export default SignInScreen