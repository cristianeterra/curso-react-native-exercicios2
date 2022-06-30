import React from "react"
import { Text } from "react-native"
import { homeStyles } from "../screens/home/HomeStyle"

export default ({ min, max }) => {
  const delta = max - min + 1
  const aleatorio = parseInt(Math.random() * delta) + min
  return (
    <Text homeStyles={homeStyles}>
      O valor aleatório é {aleatorio}
    </Text>
  )
}