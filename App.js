import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Dimensions, View, StyleSheet} from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';
import SignInScreen from './src/screens/SignInScreen'
import SignUpScreen from './src/screens/SignUpScreen'
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import NewPasswordScreen from './src/screens/NewPasswordScreen';
import Navigation from './src/navigation';
import Amplify from 'aws-amplify';
import config from './src/aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';
//import Realm from "realm";

import * as SplashScreen from 'expo-splash-screen';

import useDatabase from './src/hooks/useDatabase'
import useCachedResources from './src/hooks/useCachedResources'

import {UsersContextProvider} from './src/context/UsersContext'


Amplify.configure(config);

export default function App(props) {
  // Auth.signOut();

  SplashScreen.preventAutoHideAsync();
  const isLoadingComplete = useCachedResources();
  const isDBLoadingComplete = useDatabase();

  if (isDBLoadingComplete && isLoadingComplete) {
    SplashScreen.hideAsync();
    
    return (
    
      <View style={styles.container}>
        <UsersContextProvider>
          <Navigation />
        </UsersContextProvider>
  
        
      </View>
    );
  } else {
    return null
  }

 
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d6d7ff',
    flex: 1
  }
});


