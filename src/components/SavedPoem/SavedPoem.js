import React, { useState, useContext } from 'react';
import { Button, View, Text, StyleSheet, Pressable, Image } from 'react-native';
import Modal from "react-native-modal";
import { BlurView } from 'expo-blur';
import CustomButton from '../CustomButton';
import GoogleButton from '../GoogleButton';
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import {UsersContext} from 'wavy/src/context/UsersContext.js'

const SavedPoem = ({ onPress, text, type, bgColor, textColor, imgSrc, poemText, backId }) => {
    const [isModalVisible, setModalVisible] = useState(false);

    const usersContext = useContext(UsersContext)
    const { deleteUser } = usersContext;

    const removeUser = async () => {
        setModalVisible(false)
        await new Promise(resolve => setTimeout(resolve, 150))
        deleteUser(backId)
        
    }

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <View style={{overflow: 'hidden'}}>
            <View style={styles.container}>
                
                <Pressable height={90}
                    onPress={toggleModal} 
                    style={ ({ pressed }) => [
                        pressed ? { opacity: 0.8} : {},
                        [
                        styles.inner, 
                        styles[`container_${type}`],
                        bgColor ? {backgroundColor: bgColor} : {},
                    ]]}>
                    <View style={{flexDirection: 'row'}}>
                        <Image source={imgSrc} style={{width: 50, height: 50, borderRadius: 15, borderWidth: 1, borderColor: 'lightgrey'}}/>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={[
                                styles.text, 
                                styles[`container_${text}`],
                                textColor ? {color: textColor} : {}
                                ]}>{text}
                            </Text>
                            <Text style={{paddingLeft: 12, color: 'black', width: '90%'}}>{poemText}</Text>
                        </View>

                    </View>

                </Pressable>
                
                <Modal 
                    isVisible={isModalVisible}
                    animationInTiming={1}
                    animationOutTiming={1}
                    useNativeDriver={true} 
                    backdropOpacity={0.6}
                    backdropTransitionOutTiming={1}
                    
                    transparent={true}
                >
                    
                    <View style={{ alignSelf: 'center', alignItems: 'center', backgroundColor: 'white', height: 600, width: 340, borderRadius: 30,}}>

                    <Text style={{fontWeight: 'bold', paddingTop: 60, fontSize: 22}}>{text}</Text>
                    <Image source={imgSrc} style={{marginTop: 20, width: 180, height: 180, borderRadius: 15, borderWidth: 1, borderColor: 'lightgrey'}}/>
                    <Text style={{marginTop: 30, marginBottom: 30, paddingHorizontal: 40, fontSize: 18, fontStyle:'italic'}}>I write, erase, rewrite{'\n'}{'\n'}Erase again, and then {'\n'}{'\n'}A poppy blooms.</Text>
                    <Button title="Close Poem" onPress={toggleModal} />
                    <GoogleButton bgColor='#d4655d' text={"Delete Poem"} onPress={removeUser} type="PRIMARY" icon={faTrash} iconColor='white'/>
                    </View>
                    
                </Modal>
                
                
            </View>
        </View>
        
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        
    },
    container_PRIMARY: {
        width: '97%',
        marginTop:10,
        shadowOffset: {width: 1, height: 3},
        shadowColor: 'grey',
        shadowOpacity: 0.18,
        shadowRadius: 6,
        elevation: 5,
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderColor: 'lightgrey',
        borderRadius: 12,
        marginBottom: 10,
        padding: 18,
    },
    container_SECONDARY: {
        backgroundColor: 'white',
        marginTop: 10,
        borderColor: '#5E17EB',
        borderWidth: 2,
        borderRadius: 8,
    },
    container_TERTIARY: {
        marginTop: -5,
    },
    inner: {
        padding: 20,
        width: '80%'
        
        
    },
    text: {
        paddingLeft: 12,
        fontWeight: 'bold',
        color: 'black',
    },
    text_TERTIARY: {
        
    },
    
});

export default SavedPoem;