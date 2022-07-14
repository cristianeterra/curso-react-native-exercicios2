import React from 'react'
import { Text } from 'react-native'

export default props => {
        return (
                <>
                <Text style={Homestyles}>{props.a}</Text>
                <Text style={Homestyles}>{props.b}</Text>
                </>
        )
}