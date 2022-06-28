import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppStack } from './src/routes/AppStack';
import  AuthStack from './src/routes/AuthStack'


const Tab = createMaterialBottomTabNavigator();

export default function App() {
  const auth = true;
  return (
    <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator >
            <Tab.Screen name="Iniciar">
                { auth ? () => ( <AppStack /> ) : () => ( <AuthStack /> ) }
            </Tab.Screen>
          </Tab.Navigator>
        </NavigationContainer>
    </SafeAreaProvider>
  );
}
