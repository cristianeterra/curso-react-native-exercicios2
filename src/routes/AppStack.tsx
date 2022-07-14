import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// creating a new stack navigation
const HomeStack = createNativeStackNavigator();

// IMPORT SCREENS AND COMPONENTS
import HomeScreen from '../screens/home/Home';
import Card from '../components/card/Index'
import Hello from '../components/helloWorld/Hello';
import App2 from '../components/App2'
import Comp , { Comp1, Comp2 } from '../components/Multi'
import MinmaxPai from '../components/MinMax';
import Aleatorio from '../components/Aleatorio';
import Titulopai from '../components/Titulo';
import Botao from '../components/Botao';
import Contadorpai from '../components/Contador';
import Pai from '../components/direta/Pai';

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
            {/* <HomeStack.Screen name="App2" component={App2}/>
            <HomeStack.Screen name='Comp' component={Comp}/>
            <HomeStack.Screen name='Comp1' component={Comp1}/> */}
            {/* <HomeStack.Screen name='Comp2' component={Comp2}/> */}
            {/* <HomeStack.Screen name='MinMax' component={MinmaxPai}/>
            <HomeStack.Screen name='Aleatorio' component={Aleatorio}/> */}
            {/* <HomeStack.Screen name='Titulo' component={Titulopai}/> */}
            <HomeStack.Screen name='Botao' component={Botao}/>
            <HomeStack.Screen name='Contador' component={Contadorpai}/>
            <HomeStack.Screen name='Direta' component={Pai}/>
        </HomeStack.Navigator>
    )
}