import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import GoogleButton from '../../components/GoogleButton';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faCircleExclamation, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import TextLogo from '../../../assets/images/pindartext.png';
const NewPasswordScreen = () => {
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const onSubmitPressed = () => {
        console.warn("submit");
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
            <Text style={styles.title}>Reset your password</Text>
                <CustomInput placeholder="Enter confirmation code &#9;&#9;&#9;&#9;&#9;" value={code} setValue={setCode} icon={faCircleExclamation} first={true}/>
                <CustomInput placeholder="Enter new password &#9;&#9;&#9;&#9;&#9;" value={newPassword} setValue={setNewPassword} icon={faLock} first={true}/>
                
            
            <CustomButton  text="Submit" onPress={onSubmitPressed} type="PRIMARY"/>
            
            
            

            <CustomButton  
                text="Back to Sign in" 
                onPress={onSignInPressed}
                type="SECONDARY" 
                textColor='#5E17EB'
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

export default NewPasswordScreen