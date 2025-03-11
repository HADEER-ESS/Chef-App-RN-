import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import MainBtn from './MainBtn'
import COLOR from '../../../../constant'
import FavoriteViewController from '../screen/favorite/FavoriteScreenViewController'

const EmptyFavoriteComponent = () => {
    const { favoriteGoBack } = FavoriteViewController()
    return (
        <View style={styles.componentContainerStyle}>
            <Image
                source={require("../../../../assets/empty_favorite_state.png")}
                style={styles.imageStyle}
            />
            <Text style={styles.textMainStyle}>No Favorites</Text>
            <Text style={styles.textSubStyle}>You can add an item to your favourites by clicking “Heart Icon”</Text>
            <MainBtn
                onpress={favoriteGoBack}
                text='Go Back'
                btn_backGround={COLOR.secondry_btn}
                btn_text={COLOR.primary_btn}
            />
        </View>
    )
}

export default EmptyFavoriteComponent

const styles = StyleSheet.create({
    componentContainerStyle: {
        flex: 1,
        justifyContent: 'center'
    },
    imageStyle: {
        width: 236,
        height: 236,
        alignSelf: 'center'
    },
    textMainStyle: {
        color: COLOR.black,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 32
    },
    textSubStyle: {
        width: '80%',
        color: COLOR.gray,
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'regular',
        alignSelf: 'center',
        marginTop: 16,
        marginBottom: 40
    }
})