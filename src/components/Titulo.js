import React, { Fragment } from "react"
import { View, Text } from 'react-native'
import { homeStyles } from "../screens/home/HomeStyle"

export function Titulo(props){
  const principal=props.principal
  const secundario=props.secundario
  return (
    <Fragment>
      <Text homeStyles={homeStyles.title}>{principal}</Text>
      <Text homeStyles={homeStyles.title}>{secundario}</Text>
    </Fragment>
  )
}

export default function Titulopai(){
  return <Titulo principal='Cadastro Produto' secundario='Tela de Cadastro do produto' />
};



