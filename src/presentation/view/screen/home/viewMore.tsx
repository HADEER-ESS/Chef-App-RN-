import { RouteProp, useRoute } from '@react-navigation/native'
import React from 'react'
import { RootStackParamList } from '../../../../navigation/NavigationType'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import COLOR from '../../../../../constant'
import { RecipeItemModule } from '../../../../domain/model/recipes/recipeItemModule'
import ViewMoreController from '../../../viewController/appController/ViewMoreController'
import CardComponentFixed from '../../components/CardComponentFixed'


const ViewMoreScreen = () => {
    const { data, category } = ViewMoreController()
    console.log("data is ", data);

    return (
        <View style={styles.viewScreenStyle}>
            <FlatList
                data={data}
                keyExtractor={(item, index) => `${item}:${index}`}
                renderItem={({ item, index }) => <CardComponentFixed data={item as RecipeItemModule} />}
                numColumns={2}
                columnWrapperStyle={{
                    justifyContent: 'space-between'
                }}
            />
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