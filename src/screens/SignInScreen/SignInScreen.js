import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, TextInput, Alert, Dimensions } from 'react-native';
import Logo from '../../../assets/images/haikaimain3.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import GoogleButton from '../../components/GoogleButton';
import TopWave from '../../components/TopWave';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { useNavigation } from '@react-navigation/native';
import { Auth } from 'aws-amplify';
import { useForm, Controller} from 'react-hook-form';
import Amplify from 'aws-amplify'
import BottomWave from '../../components/BottomWave';


const windowHeight = Dimensions.get('window').height;

const SignInScreen = () => {
    
    const {
        control, 
        handleSubmit, 
        formState: {errors},
    } = useForm();

    const [loading, setLoading] = useState(false);

    console.log(errors)

    const onSignInPressed = async (data) => {
        // validate user
        if (loading) {
            return;
        }
        
        setLoading(true);
        try {
            await Auth.signIn(data.username, data.password);
            //navigation.navigate('HomeScreen');
        } catch(e) {
            Alert.alert('Oops', e.message);
        }
        setLoading(false);
        
        

        //navigation.navigate('Home');
    }

    const onForgotPasswordPressed = () => {
        navigation.navigate("ForgotPassword");
    }

    const onSignInGoogle = async () => {
        try { 
            await Auth.federatedSignIn({ provider: "Google" })
        } catch(e) {
            Alert.alert('Google error');
        }
    }

    const onSignUpPress = () => {
        navigation.navigate("SignUp");
    }


    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    return (

        <View style={styles.maincontainer}>

        <TopWave/>


        <View style={styles.root}>
            
            <Image source={Logo} style={[styles.logo, {height: height * 0.32}]} resizeMode="contain" />

            
            <CustomInput name="username" placeholder="Username&#9;&#9;&#9;&#9;&#9;" control={control} rules={{required: 'Username is required'}} icon={faUser} />
            <CustomInput name="password" placeholder="Password&#9;&#9;&#9;&#9;&#9;" control={control} rules={{required: 'Password is required', minLength: {value: 8, message: 'Password must be at least 8 characters'}}} secureTextEntry={true} icon={faLock} />
            
            <CustomButton  text={loading ? "Signing In..." : "Sign In"} onPress={handleSubmit(onSignInPressed)} type="PRIMARY"/>
            
            
            <GoogleButton  text="Sign In with Google" onPress={onSignInGoogle} type="PRIMARY" bgColor="#FAE9EA" fgColor="#DD4D44" icon={faGoogle} iconColor="#DD4D44"/>
            
            
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

        <BottomWave />

        </View>


    );
};

const styles = StyleSheet.create({
    root: {
        height: windowHeight - 100,
        marginTop: 100,
        backgroundColor: '#d6d7ff',
    },
    logo: {
        width: '100%',
        maxWidth: 500,
        maxHeight: 480,
    },
    maincontainer: {
        backgroundColor: '#d6d7ff',
    }
})

export default SignInScreen