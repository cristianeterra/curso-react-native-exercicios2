import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default props => {
  return (
    <View style={style.Display}>
      <Text style={[style.Display, style.DisplayText]}>
        {props.num}
      </Text>
    </View>
  )
}

const style = StyleSheet.create({
  Display: {
    blackgroundColor: '#000',
    padding: 20,
    width: 300
  },
  DisplayText: {
    color: '#FFF'
  }
})