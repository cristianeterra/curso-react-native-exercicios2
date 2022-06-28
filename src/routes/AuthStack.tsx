import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import SettingsScreen from '../screens/settings/Index';
import ProfileScreen from '../screens/profile/Index';
import SignInScreen from '../screens/signin/SignInScreen';

const SettingsStack = createNativeStackNavigator();

export function AppStack(){
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name="SignIn" component={SignInScreen} />
            <SettingsStack.Screen name="Settings" component={SettingsScreen} />
            <SettingsStack.Screen name="Profile" component={ProfileScreen} />
        </SettingsStack.Navigator>
    )
}

export default AppStack