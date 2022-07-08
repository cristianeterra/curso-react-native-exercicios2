import React, { useState } from "react";
import { Text, Button } from "react-native";
import { homeStyles } from "../screens/home/HomeStyle";

export function Contador(props){
  // let numero = props.inicial
  const [numero, setNumero] = useState(props.inicial)

  const inc = () => setNumero(numero + props.passo)
  const dec = () => setNumero(numero - props.passo)

  return (
    <>
      <Text style={homeStyles}>{numero}</Text>
      <Button title="+" onPress={inc} />
      <Button title="-" onPress={dec} />
    </>
  )
}

export default function Contadorpai(){
  return <Contador inicial={0} passo={1} />
};