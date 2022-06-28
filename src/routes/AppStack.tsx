import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// creating a new stack navigation
const HomeStack = createNativeStackNavigator();

// IMPORT SCREENS AND COMPONENTS
import HomeScreen from '../screens/home/Home';
import Card from '../components/card/Index'
import Hello from '../components/helloWorld/Hello';

export function AppStack(){
    return (
        <HomeStack.Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: '#1f1f1f',
                },
                headerTintColor: '#FB542B',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
            >
            <HomeStack.Screen name="Home Screen!"component={HomeScreen} />
            <HomeStack.Screen name="Card" component={Card} />
            <HomeStack.Screen name="HelloWorld" component={Hello} />
        </HomeStack.Navigator>
    )
}