import React from 'react'
import { Button } from 'react-native'

export default function FilhoIndireta(props){
  function gerarNumero(minimo, maximo) {
    const fator = maximo - minimo + 1
    const nro_aleatorio = parseInt(Math.random() * fator) + minimo
    return  nro_aleatorio
  }

  return (
    <Button
      title="Executar"
      onPress={function() {
        const n = gerarNumero(props.min, props.max)
        props.funcao(n)
      }}
    />
  )
}
