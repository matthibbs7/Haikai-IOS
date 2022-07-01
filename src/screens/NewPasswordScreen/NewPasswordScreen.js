import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, Dimensions } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import GoogleButton from '../../components/GoogleButton';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faCircleExclamation, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import TextLogo from '../../../assets/images/haikaitext1.png';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify';
import BottomWave from '../../components/BottomWave';
import TopWave from '../../components/TopWave';

const windowHeight = Dimensions.get('window').height;


const NewPasswordScreen = () => {
    const {control, handleSubmit} = useForm();
    const navigation = useNavigation();

    const onSubmitPressed = async(data) => {
        try {
            await Auth.forgotPasswordSubmit(data.username, data.code, data.password);
            navigation.navigate('SignIn');
        } catch (e) {
            Alert.alert("Oops", e.message);
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
            <Text style={styles.title}>Reset your password</Text>
                <CustomInput name="username" control={control} placeholder="Username &#9;&#9;&#9;&#9;&#9;" icon={faCircleExclamation} rules={{required: 'Username is required'}}/>
                <CustomInput name="code" control={control} placeholder="Enter confirmation code &#9;&#9;&#9;&#9;&#9;" icon={faCircleExclamation} rules={{required: 'Code is required'}}/>
                <CustomInput name="password" control={control} placeholder="Enter new password &#9;&#9;&#9;&#9;&#9;" rules={{required: 'Password is required', minLength: {value: 8, message: "Password must be at least 8 characters"}, maxLength: {value: 30, message: "Password must under 30 characters"}}} icon={faLock} />
                
            
            <CustomButton  text="Submit" onPress={handleSubmit(onSubmitPressed)} type="PRIMARY"/>
            
            
            

            <CustomButton  
                text="Back to Sign in" 
                onPress={onSignInPressed}
                type="SECONDARY" 
                textColor='#5E17EB'
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
        marginBottom: -60,
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

export default NewPasswordScreen