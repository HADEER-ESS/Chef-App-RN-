import { RouteProp, useRoute } from '@react-navigation/native'
import React from 'react'
import { RootStackParamList } from '../../../../navigation/NavigationType'
import { Text } from 'react-native'

type MoreScreenRouteProps = RouteProp<RootStackParamList, "more">

const ViewMoreScreen = () => {
    const route = useRoute<MoreScreenRouteProps>()
    const { category } = route.params
    return (
        <Text>
            {category}
        </Text>
    )
}

export default ViewMoreScreen