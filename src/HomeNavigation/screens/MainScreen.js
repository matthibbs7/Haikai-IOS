import React, {useState, useContext} from 'react';
import { View, Text, ScrollView, TextInput, Button } from 'react-native';
import CustomButton from '../../components/CustomButton';
import SavedPoem from '../../components/SavedPoem';
import { Linking } from "react-native";

import {UsersContext} from 'wavy/src/context/UsersContext.js'

export default function MainScreen({navigation}, props) {
    

    const [ name, setName ] = useState(null);
    const [ haiku, setHaiku ] = useState(null);
    const [ image, setImage ] = useState(null)

    const usersContext = useContext(UsersContext)
    const { users, addNewUser } = usersContext;

    const insertUser = () => {
        addNewUser(name, haiku, image)
    }

    return (

        
            <View 
            noShadow={true}
            style={{shadowOpacity: 0, shadowColor: 'transparent',elevation:0, backgroundColor: 'white', borderColor: 'white', borderWidth:10, borderRadius: 0, flex: 1,  height: 800}}>
                
            
                <View noShadow={false} style={{ borderWidth: 1, borderColor: 'white', shadowColor: 'grey',elevation:0, borderRadius: 20, alignItems: 'center',
                    shadowOpacity: 0,
                    backgroundColor: 'white',flex: 1, alignItems: 'center'}}>
                    
                    <View style={{backgroundColor: '#f1f0f5', width: 350, borderRadius: 12, marginTop: 20, paddingVertical: 20, paddingHorizontal: 20, alignItems: 'center'}}>
                        <Text
                            style={{fontSize: 26, fontWeight: 'bold', paddingBottom: 5}}>
                                What is Haikai?
                        </Text>
                        <Text style={{fontSize: 15, textAlign: 'center', color: '#4d4d4d', paddingBottom: 10}}>Haikai is a mobile appliction that allows users to generate artificial Haiku Poems about an image they upload.</Text>
                        
                        <ScrollView>
                            
                        </ScrollView>
                        

                        

                        <CustomButton onPress={()=>{ 
                            
                            Linking.openURL('https://github.com/')
                            
                            }} text="Learn More" type="PRIMARY"/>
                    </View>

                    

                    

                    
                </View>
                <View noShadow={false} style={{ borderWidth: 1, borderColor: 'white', shadowColor: 'grey',elevation:0, borderRadius: 20, alignItems: 'left',
                    shadowOpacity: 0,
                    backgroundColor: 'white', flex: 1, marginTop: -160, paddingLeft: 15}}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold', paddingBottom: 5}}>My Poems</Text>
                    <ScrollView bounces={false} horizontal={false} width='100%' >
                            {users.length ? users?.map?.((user) => (
                                <SavedPoem backId={user.id} key={user.id} text={user.name} poemText={user.haiku} imgSrc={{uri: user.image}} type="PRIMARY" />
                            )) : <Text>No Poems Saved Yet.</Text>}
                            
                    </ScrollView>
                </View>
                
                
            </View>
       
    );
}