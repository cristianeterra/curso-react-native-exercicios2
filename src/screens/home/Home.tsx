import React from 'react';
import { Text } from 'react-native';
import { homeStyles }   from './HomeStyle';

import { SafeAreaView } from 'react-native-safe-area-context';
import { CardButton } from '../../components/button/CardButton';


function HomeScreen({navigation}){
    return (
        <SafeAreaView style={homeStyles.background}>
            <Text style={homeStyles.title}>Minhas Aplicacoes</Text>
            {/* <CardButton title="Hello World" style={homeStyles.homeButton} onPress={() => navigation.navigate('HelloWorld' )} /> */}
            {/* <CardButton title="App 2" style={homeStyles.homeButton} onPress={() => navigation.navigate('App2' )} />
            <CardButton title="Multi" style={homeStyles.homeButton} onPress={() => navigation.navigate('Comp' )} />
            <CardButton title="Comp 2" style={homeStyles.homeButton} onPress={() => navigation.navigate('Comp1' )} /> */}
            {/* <CardButton title="Comp 3" style={homeStyles.homeButton} onPress={() => navigation.navigate('Comp2' )} /> */}
            <CardButton title="Mínimo e Máximo" style={homeStyles.homeButton} onPress={() => navigation.navigate('MinMax' )} />
            <CardButton title="Aleatório" style={homeStyles.homeButton} onPress={() => navigation.navigate('Aleatorio' )} />
            <CardButton title="Título" style={homeStyles.homeButton} onPress={() => navigation.navigate('Titulo' )} />
            <CardButton title="Botão" style={homeStyles.homeButton} onPress={() => navigation.navigate('Botao' )} />
        </SafeAreaView>
    )
}
export default HomeScreen;