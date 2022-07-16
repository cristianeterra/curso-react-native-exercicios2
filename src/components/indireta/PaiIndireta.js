import React, { useState } from 'react'
import FilhoIndireta from './FilhoIndireta'
import { Text } from 'react-native'
import { homeStyles } from '../../screens/home/HomeStyle'

export default props => {
  const [num, setNum] = useState(0)
        
  function exibirValor(numero) {
    setNum(numero)
  }

  return (
    <>
    <Text style={homeStyles}>{num}</Text>
    <FilhoIndireta min={1} max={60} funcao={exibirValor} />
    </>
  )
}