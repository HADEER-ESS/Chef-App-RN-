import React from 'react'
import { Animated, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import COLOR from '../../../../constant';
import { RecipeItemModule } from '../../../domain/model/recipes/recipeItemModule';
import { ITEM_WIDTH } from '../../viewController/appController/homeController';

type props = {
    data: RecipeItemModule,
    scrollx: Animated.Value,
    index: number,
    isLoved: boolean,
    addFav: (data: RecipeItemModule) => void
}

const CardComponent = ({ data, scrollx, index, isLoved, addFav }: props) => {
    const inputRange = [
        (index - 1) * ITEM_WIDTH,
        index * ITEM_WIDTH,
        (index + 1) * ITEM_WIDTH
    ]

    const scale = scrollx.interpolate({
        inputRange,
        outputRange: [0.8, 1, 0.8],
        extrapolate: 'clamp'
    })

    return (
        <Animated.View
            style={[styles.viewContainerCard, { transform: [{ scale }] }]}
        >
            <TouchableOpacity onPress={() => addFav(data)}>
                <ImageBackground
                    style={styles.backgroundImgaeStyle}
                    source={{ uri: data.image }}
                    imageStyle={{ borderRadius: 32 }}
                >
                    <View style={styles.BlureViewContainer}>
                        <Text style={styles.textStyle}>{data.title}</Text>
                        <View style={[styles.iconContainerStyle, { backgroundColor: isLoved ? COLOR.white : COLOR.primary_btn }]}>
                            <MaterialCommunityIcons name='heart' size={24} color={isLoved ? COLOR.primary_btn : COLOR.white} />
                        </View>
                    </View>
                </ImageBackground>
            </TouchableOpacity>

        </Animated.View>
    )
}

export default CardComponent

const styles = StyleSheet.create({
    viewContainerCard: {
        flex: 1,
    },
    backgroundImgaeStyle: {
        resizeMode: 'contain',
        width: ITEM_WIDTH / 1.1,
        height: 300,
    },
    BlureViewContainer: {
        padding: 8,
        backgroundColor: '#8080804D',
        borderRadius: 16,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 16,
        left: 10,
    },
    textStyle: {
        color: COLOR.white,
        fontSize: 16,
        fontWeight: "bold",
        textAlign: 'center'
    },
    iconContainerStyle: {
        backgroundColor: COLOR.primary_btn,
        padding: 8,
        borderRadius: 32,
        alignSelf: 'flex-end'
    }
})