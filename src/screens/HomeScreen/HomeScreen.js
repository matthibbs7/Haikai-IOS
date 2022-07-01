import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import * as React from 'react'
import { Auth, autoShowTooltip } from 'aws-amplify'
import TopWave from '../../components/TopWave';
import BottomWave from '../../components/BottomWave';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

import MainScreen from '../../HomeNavigation/screens/MainScreen';
import DetailsScreen from '../../HomeNavigation/screens/DetailsScreen';
import SettingsScreen from '../../HomeNavigation/screens/SettingsScreen';



const windowHeight = Dimensions.get('window').height;

const Tab = createBottomTabNavigator();

const detailsName = ' ';
const settingsName = '   ';
const homeName = '  ';

const HomeScreen = (props) => {
  const signOut = () => {
    Auth.signOut();
  }

  return (



    <View style={styles.maincontainer}>

    

    <View style={styles.root}>
    
      <NavigationContainer independent={true} style={{backgroundColor: 'black'}}>
        <Tab.Navigator
          initialRouteName={homeName}
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              let rn = route.name;

              if (rn === homeName) {
                iconName = focused ? 'home' : 'home-outline'
              } else if (rn === detailsName) {
                iconName = focused ? 'brush' : 'brush-outline'
              } else if (rn === settingsName) {
                iconName = focused ? 'settings' : 'settings-outline'
              }

              return <Ionicons name={iconName} size={size} color={color} style={{paddingTop: 12}}/>
            }, tabBarStyle: {borderTopWidth: 0, shadowColor: 'grey', shadowOpacity: 0.08,
            shadowRadius: 2.0, elevation: 10,height: 90, paddingBottom: 30, backgroundColor: 'white'}, headerShown: true, tabBarActiveTintColor: 'black', tabBarInactiveTintColor: 'grey',
               headerStyle: {shadowColor: 'grey', elevation: 5, shadowOpacity: 0.18, shadowRadius: 6.0, backgroundColor: 'white', height: 100}, headerTintColor: '#white'
          })}
          

        >

          <Tab.Screen 
            name={homeName} 
            component={MainScreen} 
            style={{backgroundColor: 'B7C68B', borderColor: 'B7C68B', borderWidth: 10 }}
            options={{
              headerTitle: (props) => (
                <Image
                  style={{ width: 200, height: 120 }}
                  source={require('../../../assets/images/haikainavy2.png')}
                  resizeMode='contain'
                />
              ),
              headerTitleStyle: { flex: 1, textlign: 'center'}
            }}
          />
          <Tab.Screen name={detailsName} component={DetailsScreen} options={{
              headerTitle: (props) => (
                <Image
                  style={{ width: 200, height: 120 }}
                  source={require('../../../assets/images/haikainavy2.png')}
                  resizeMode='contain'
                />
              ),
              headerTitleStyle: { flex: 1, textlign: 'center'}
            }}/>
          <Tab.Screen name={settingsName} component={SettingsScreen} options={{
              headerTitle: (props) => (
                <Image
                  style={{ width: 200, height: 120 }}
                  source={require('../../../assets/images/haikainavy2.png')}
                  resizeMode='contain'
                />
              ),
              headerTitleStyle: { flex: 1, textlign: 'center'}
            }}/>


        </Tab.Navigator>
      </NavigationContainer>

      





    </View>

    

    </View>
  )
}

const styles = StyleSheet.create({
  root: {
      height: windowHeight,
      backgroundColor: 'black',
  },
  maincontainer: {
    backgroundColor: '#d6d7ff',
  }
})

export default HomeScreen