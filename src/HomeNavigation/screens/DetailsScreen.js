
import React, {useState, useEffect, useContext} from 'react';
import { View, Text, Platform, Button, Image, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import { faCamera, faImage, faArrowLeft, faFloppyDisk } from '@fortawesome/free-solid-svg-icons'
import GoogleButton from '../../components/GoogleButton';
import Modal from "react-native-modal";
import SavedPoem from '../../components/SavedPoem/SavedPoem';
import {UsersContext} from 'wavy/src/context/UsersContext.js'

export default function DetailsScreen({navigation}) {


    const usersContext = useContext(UsersContext)
    const { addNewUser } = usersContext;

    const [ name, setName ] = useState('Poem');
    const [ haiku, setHaiku ] = useState(null);
    const [ imagetext, setImageText ] = useState(null)
    
    const insertUser = () => {
        setHaiku("Poem sample text data")
        

        console.log(haiku)

        addNewUser(name, haiku, image)
        toggleModal()
        setImage(null);
    }
    
    const [image, setImage] = useState(null);
    const [savePoem, setSavePoem] = useState(null);
    const [text, setText] = useState('Poem');

    const [productImage, setProductImage] = useState(null);
    const [selectProductImage, setSelectProductImage] = useState(null);
    const [warpClothing, setWarpClothing] = useState(null);

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    useEffect( async () => {
        
    }, [])

    useEffect( async () => {
        
    })
    
    const NewPhoto = () => {
        setImage(null);
        setSavePoem(null);
        console.log("New Photo pressed");
        setModalVisible(false);
    }

    const GenerateHaiku = () => {
        toggleModal()
        setHaiku("Poem sample text data")
    }

    const TakeImage = async () => {
        if (Platform.OS !== 'web') {
           const {status} =  await ImagePicker.requestCameraPermissionsAsync();
            if (status.granted === false) {
                alert('Please enable Pindar Camera Permission in Settings')
            }
        }
        let result = await ImagePicker.launchCameraAsync( {
            quality: 1,
            base64: true,
            allowsEditing: true,
        })
        console.log(result)
        if (!result.cancelled) {
            setImage(result.uri)
            console.log(result.base64)
        }
    }

    const TakeProductImage = async () => {
        if (Platform.OS !== 'web') {
           const {status} =  await ImagePicker.requestCameraPermissionsAsync();
            if (status.granted === false) {
                alert('Please enable Pindar Camera Permission in Settings')
            }
        }
        let result = await ImagePicker.launchCameraAsync( {
            quality: 1,
            base64: true,
            allowsEditing: true,
        })
        console.log(result)
        if (!result.cancelled) {
            setProductImage(result.uri)
            console.log(result.base64)
        }
    }

    const PickImage = async () => {
        if (Platform.OS !== 'web') {
            const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('Please enable Pindar Photos Permission in Settings')
            }
        }
        let result = await ImagePicker.launchImageLibraryAsync( {
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4,3],
            quality: 1,
            base64: false
        })
        console.log(result);
        if (!result.cancelled) {
            setImage(result.uri)
            console.log(result.base64)
        }
    }
    const PickProductImage = async () => {
        if (Platform.OS !== 'web') {
            const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('Please enable Pindar Photos Permission in Settings')
            }
        }
        let result = await ImagePicker.launchImageLibraryAsync( {
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4,3],
            quality: 1,
            base64: false
        })
        console.log(result);
        if (!result.cancelled) {
            setProductImage(result.uri)
            console.log(result.base64)
        }
    }

    const WarpClothing = () => {
        setWarpClothing(true);
    }

    const SavePoem = () => {
        setSavePoem(true);
    }

    return (
        

        <View 
        noShadow={true}
        style={{backgroundColor: 'white', borderColor: 'white', borderWidth:10, borderRadius: 0, flex: 1, justifyContent: 'center'}}>
            
           
            <View noShadow={true} style={{ borderWidth: 1, borderColor: 'white',shadowColor: 'transparent',elevation:0, borderRadius: 20,
                    shadowOpacity: 0,
                    backgroundColor: '#f0f0f0',flex: 1, alignItems: 'center', justifyContent: 'center'}}>

                { !image && 

                    <View style={{shadowOffset: {width: 1, height: 3}, shadowColor: 'grey', shadowOpacity: 0.3, shadowRadius: 6, elevation: 5,maxHeight: 380, width: 300,flex: 1, alignItems: 'center', backgroundColor: 'white', borderRadius: 30, borderColor: 'lightgrey', borderWidth: 1, paddingHorizontal: 0, padding: 40}}>
                        <Text
                            onPress={() => alert('This is the "Home" screen.')}
                            style={{ fontSize: 24, fontWeight: 'bold', color: 'black'}}>
                                Create New Poem
                                    
                        </Text>

                        <Text style={{color: 'lightgrey', marginBottom: 30,}}>______________________________</Text>

                        <Text style={{textAlign: 'center', paddingHorizontal: 35, fontSize:15, marginBottom: 35,}}>Select a new image by clicking the buttons below to proceed with generating a new Poem about the image. </Text>

                        <CustomButton  text="               Take Photo               " onPress={TakeImage} type="PRIMARY" /> 
                        <CustomButton  text={"      Choose from Library      "} onPress={PickImage} type="PRIMARY"  /> 
                    </View>

                }

                { image && 
                    <View style={{shadowOffset: {width: 1, height: 3}, shadowColor: 'grey', shadowOpacity: 0.3, shadowRadius: 6, elevation: 5,maxHeight: 380, width: 300,flex: 1, alignItems: 'center', backgroundColor: 'white', borderRadius: 30, borderColor: 'lightgrey', borderWidth: 1, paddingHorizontal: 0, padding: 30}}>
                        

                        <Image source={{uri:image}} style={{width: 200, height: 200, borderRadius: 30, borderWidth: 1, borderColor: 'lightgrey'}}/>
                        <CustomButton  text={"Generate Haiku"} onPress={GenerateHaiku} type="PRIMARY"/>
                        <GoogleButton text={"New Photo Upload"} onPress={NewPhoto} type="PRIMARY" iconColor="white" icon={faArrowLeft}/>
                    </View>
                }

                <Modal 
                    isVisible={isModalVisible}
                    animationInTiming={1}
                    animationOutTiming={1}
                    useNativeDriver={true} 
                    backdropOpacity={0.6}
                    backdropTransitionOutTiming={1}
                    
                    transparent={true}
                >
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                        <>
                        { !savePoem &&
                            <View style={{ alignSelf: 'center', alignItems: 'center', backgroundColor: 'white', height: 600, width: 340, borderRadius: 10,}}>
                            
                            <View style={{alignItems: 'center', backgroundColor: '#f0f0f0', borderRadius: 20, borderColor: 'lightgrey', borderWidth: 0, marginTop: 20, paddingTop: -20, shadowOffset: {width: 1, height: 3}, borderColor: 'lightgrey', borderWidth: 1,shadowColor: 'lightgrey', shadowOpacity: 0.8, shadowRadius: 15, elevation: 5,}}>
                                <Text style={{fontSize: 28, fontWeight: 'bold', paddingTop: 10, color: '#203559'}}>Generated Haiku</Text>
                                <Text style={{color: 'black', marginBottom: 0,}}>______________________________</Text>
                                <Image source={{uri:image}} style={{marginTop: 20, width: 180, height: 180, borderRadius: 15, borderWidth: 1, borderColor: 'lightgrey'}}/>
                                <Text style={{marginTop: 30, marginBottom: 30, paddingHorizontal: 40, fontSize: 19, fontStyle:'italic', fontWeight: '400', textAlign: 'center'}}>I write, erase, rewrite{'\n'}{'\n'}Erase again, and then {'\n'}{'\n'}A poppy blooms.</Text>
                            </View>
                            <CustomButton  text={"Save Poem"} onPress={SavePoem} type="PRIMARY"/>
                            <GoogleButton  text={"Exit Poem"} onPress={toggleModal} type="PRIMARY" iconColor='white' icon={faArrowLeft}/>
                            
                            
                            </View>
                        } 
                        { savePoem && 
                            <View style={{ alignSelf: 'center', alignItems: 'center', backgroundColor: 'white', height: 600, width: 340, borderRadius: 10,}}>
                            
                            
                            <Text style={{fontSize: 28, fontWeight: 'bold', paddingTop: 25}}>Save Poem</Text>
                            <Text style={{color: 'lightgrey', marginBottom: 30,}}>______________________________</Text>
                            <SavedPoem text={name} poemText="Poem Sample text data goes here" type="PRIMARY" imgSrc={{uri: image}}/>
                            
                            <Text style={{fontWeight: 'bold', fontSize: 16, paddingTop: 20, paddingBottom: 5}}>Enter a Poem Title                         </Text>
                            <TextInput
                                placeholder="Poem Name..."
                                placeholderTextColor='grey'
                                style={{borderWidth: 1, padding: 15, borderRadius: 5, borderColor: 'lightgrey', width: 240, marginBottom: 30}}
                                maxLength={20}
                                onChangeText={newName => setName(newName)}
                            />

                            
                            <GoogleButton bgColor='#15bd7a' text={"Confirm"} onPress={insertUser} type="PRIMARY" icon={faFloppyDisk} iconColor='white'/>
                            <GoogleButton  text={"Create New Poem"} onPress={NewPhoto} type="PRIMARY" iconColor='white' icon={faArrowLeft}/>
                            
                            
                            </View>

                        }
                        </>
                    </TouchableWithoutFeedback>
                    
                </Modal>
                

                
                
                
            </View>
            
        </View>
    );
}