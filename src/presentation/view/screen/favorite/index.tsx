import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import COLOR from '../../../../../constant'
import FavoriteViewController from './FavoriteScreenViewController'
import CardComponentFixed from '../../components/CardComponentFixed'
import EmptyFavoriteComponent from '../../components/EmptyFavoriteComponent'

const FavoriteScreen = () => {
    const { favoritDish } = FavoriteViewController()
    return (
        <View style={style.screenContainer}>
            {favoritDish.length ?
                <FlatList
                    data={favoritDish}
                    numColumns={2}
                    keyExtractor={(item, index) => `${item.rec_id} : ${index}`}
                    renderItem={({ item }) => <CardComponentFixed data={item} />}
                />
                :
                <EmptyFavoriteComponent />
            }

        </View>
    )
}

export default FavoriteScreen

const style = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: COLOR.white
    }
})