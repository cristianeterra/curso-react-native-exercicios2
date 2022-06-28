import React from 'react';
import { Text } from 'react-native';
import { homeStyles }   from './HomeStyle';

import { SafeAreaView } from 'react-native-safe-area-context';
import { CardButton } from '../../components/button/CardButton';


function HomeScreen({navigation}){
    return (
        <SafeAreaView style={homeStyles.background}>
            <Text style={homeStyles.title}>Minhas Aplicacoes</Text>
            <CardButton title="Exercicio 1" style={homeStyles.homeButton} onPress={() => navigation.navigate('HelloWorld' )} />
        </SafeAreaView>
    )
}
export default HomeScreen;