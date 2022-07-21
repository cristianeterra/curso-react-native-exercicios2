import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { homeStyles } from '../../screens/home/HomeStyle'

import ContadorDisplay from './ContadorDisplay'
import ContadorBotoes from './ContadorBotoes'

export default function ContadorV2(props) {

  const [num, setNum] = useState(0)

  const inc = () => setNum(num + 1)
  const dec = () => setNum(num - 1)

  return (
    <View>
      <Text style={homeStyles.title}>
        Contador
      </Text>
      <ContadorDisplay num={num} />
      {console.log('entrei')}
      <ContadorBotoes inc={inc} dec={dec} />
    </View>
  )
};