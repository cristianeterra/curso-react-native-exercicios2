import React from "react"
import { Text } from "react-native"
import { homeStyles } from "../screens/home/HomeStyle"

export function Aleatorio(props){
  const min= +props.min
  const max= +props.max
  const delta = max - min + 1
  const aleatorio = parseInt(Math.random() * delta) + min
  return (
    <Text homeStyles={homeStyles}>
      O valor aleatório é {+aleatorio}
    </Text>
  )
}

export default function Titulopai(){
  return <Aleatorio min='1' max='94' />
};

