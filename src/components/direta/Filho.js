import React from 'react'
import { Text } from 'react-native'
import { homeStyles } from '../../screens/home/HomeStyle'

export default props => {
        return (
                <>
                <Text style={homeStyles}>{props.a}</Text>
                <Text style={homeStyles}>{props.b}</Text>
                </>
        )
}