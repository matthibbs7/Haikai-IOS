import * as React from 'react';
import { View, Text } from 'react-native';
import { Auth } from 'aws-amplify'
import CustomButton from '../../components/CustomButton';
import GoogleButton from '../../components/GoogleButton';
import { faArrowRightFromBracket, faHeart, faShare, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {
    Avatar,
    Title,
    Caption,
    TouchableRipple,
} from 'react-native-paper';

export default function SettingsScreen({navigation}) {
    const signOut = () => {
        Auth.signOut();
      }
    
    return (

        <View 
        noShadow={true}
        style={{shadowOpacity: 0, shadowColor: 'transparent',elevation:0, backgroundColor: 'white', borderColor: 'white', borderWidth:10, borderRadius: 0, flex: 1, justifyContent: 'center'}}>
            
        
            <View noShadow={true} style={{ borderWidth: 1, borderColor: 'white', height: 800,shadowColor: 'transparent',elevation:0, borderRadius: 20,
                    shadowOpacity: 0,
                    backgroundColor: '#f0f0f0',flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text
                    onPress={() => alert('This is the "Home" screen.')}
                    style={{ fontSize: 26, fontWeight: 'bold'}}>
                </Text>

                <View>
                    <View style={{flexDirection: 'row', marginTop: 50, marginBottom: 30}}>
                        <Avatar.Image
                            source={require('../../../assets/images/pfp4.png')}
                            size={80}
                        />
                        <View style={{marginLeft: 20}}>
                            <Title>Username</Title>
                            <Caption>@email</Caption>
                        </View>
                    </View>
                </View>

                
                <GoogleButton  text="Tell your Friends" onPress={"hi"} type="PRIMARY" icon={faShare} iconColor="white"/>
                <GoogleButton  text="Leave a Review" onPress={"hi"} type="PRIMARY" icon={faHeart} iconColor="white"/>
                
                <GoogleButton  text="Support" onPress={"hi"} type="PRIMARY" icon={faEnvelope} iconColor="white"/>

        
                <GoogleButton  text="Sign Out" onPress={signOut} type="PRIMARY" bgColor="#FAE9EA" fgColor="#DD4D44" icon={faArrowRightFromBracket} iconColor="#DD4D44"/>
                
            </View>
            
        </View>
    );
}