import React from 'react'
import Filho from './Filho'

export function Pai(props){
        let x = props.a
        let y = props.b
        return (
          <>
            <Filho a={x} b={y} />
            <Filho a={x + 100} b={y + 200} />
          </>
        )
}

export default function DiretaPai(){
  return <Pai a='13' b='100' />
};