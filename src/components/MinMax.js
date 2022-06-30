import React from "react"
import { Text, View } from "react-native"
import { homeStyles } from "../screens/home/HomeStyle"

export function MinMax(props){
  const min= +props.min
  const max= +props.max
  return (
    <View style={homeStyles.title}>
      <Text>O valor {max} é maior que o valor {min}!</Text>
      <Text>Soma = { max + min }</Text>
    </View>
  )
} 

export default function MinmaxPai(){
  return <MinMax min='1' max='94' />
};