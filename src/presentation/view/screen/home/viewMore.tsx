import { RouteProp, useRoute } from '@react-navigation/native'
import React from 'react'
import { RootStackParamList } from '../../../../navigation/NavigationType'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import COLOR from '../../../../../constant'
import CardComponent from '../../components/CardComponent'
import { RecipeItemModule } from '../../../../domain/model/recipes/recipeItemModule'
import ViewMoreController from '../../../viewController/appController/ViewMoreController'


const ViewMoreScreen = () => {
    const { recipesData, category } = ViewMoreController()
    return (
        <View style={styles.viewScreenStyle}>
            <FlatList
                data={[]}
                keyExtractor={(item, index) => `${item}:${index}`}
                renderItem={({ item, index }) => <CardComponent index={index} data={item as RecipeItemModule} addFav={() => { }} />}
            />
            <Text>
                {category}
            </Text>
        </View>

    )
}

export default ViewMoreScreen

const styles = StyleSheet.create({
    viewScreenStyle: {
        backgroundColor: COLOR.white,
        flex: 1
    }
})