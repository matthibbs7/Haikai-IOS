import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import GoogleButton from '../../components/GoogleButton';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faLock, faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import TextLogo from '../../../assets/images/pindartext.png';
const SignUpScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const onRegisterPressed = () => {
        console.warn("Register");
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

    const onSignInPressed = () => {
        console.warn("Back to sign in")
    }

    const {height} = useWindowDimensions();
    
    
    return (
        <View stye={styles.root}>
            
            <Image source={TextLogo} style={[styles.logo, {height: height * 0.12}]} resizeMode="contain" />
            <Text style={styles.title}>Create an Account</Text>
            
                <CustomInput placeholder="Username&#9;&#9;&#9;&#9;&#9;" value={username} setValue={setUsername} icon={faUser} first={true}/>
                <CustomInput placeholder="Email&#9;&#9;&#9;&#9;&#9;" value={email} setValue={setEmail} icon={faEnvelope} first={false}/>
                <CustomInput placeholder="Password&#9;&#9;&#9;&#9;&#9;" value={password} setValue={setPassword}  secureTextEntry={true} icon={faKey} first={false}/>
                <CustomInput placeholder="Confirm Password&#9;&#9;&#9;&#9;&#9;" value={passwordRepeat} setValue={setPasswordRepeat}  secureTextEntry={true} icon={faLock} first={false}/>
            
            <CustomButton  text="Register" onPress={onRegisterPressed} type="PRIMARY"/>
            
            
            
            <GoogleButton  text="Sign Up with Google" onPress={onSignInGoogle} type="PRIMARY" bgColor="#FAE9EA" fgColor="#DD4D44" icon={faGoogle}/>

            
            <CustomButton  
                text="Have an account? Sign in" 
                onPress={onSignInPressed}
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
    },
    title: {
        
        fontSize: 28,
        fontWeight: 'bold',
        color: '#4700d4',
        margin: 10,
        alignSelf: 'center'
    }
})

export default SignUpScreen