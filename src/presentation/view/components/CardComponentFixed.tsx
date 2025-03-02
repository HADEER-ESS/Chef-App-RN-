import React from 'react'
import { Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ITEM_WIDTH } from '../../viewController/appController/homeController';
import COLOR from '../../../../constant';
import { RecipeItemModule } from '../../../domain/model/recipes/recipeItemModule';

type props = {
    data: RecipeItemModule
}

const CardComponentFixed = ({ data }: props) => {
    return (
        <View
            style={styles.viewContainerCard}
        >
            <TouchableOpacity onPress={() => { }}>
                <ImageBackground
                    style={styles.backgroundImgaeStyle}
                    source={{ uri: data?.image }}
                    imageStyle={{ borderRadius: 32 }}
                >
                    <View style={styles.BlureViewContainer}>
                        <Text style={styles.textStyle}>{data?.title}</Text>
                        <View style={[styles.iconContainerStyle, {}]}>
                            <MaterialCommunityIcons name='heart' size={24} color={COLOR.white} />
                        </View>
                    </View>
                </ImageBackground>
            </TouchableOpacity>

        </View>
    )
}

export default CardComponentFixed

const styles = StyleSheet.create({
    viewContainerCard: {
        flex: 1,
        margin: 8,  // Adds spacing between items
        borderRadius: 16,
        overflow: "hidden",
        backgroundColor: "#FFF",
        elevation: 5,  // Adds shadow effect on Android
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 4 },
        width: (Dimensions.get("screen").width / 2) - 24,
    },
    backgroundImgaeStyle: {
        width: '100%',
        height: 200, // Adjust height based on design needs
        justifyContent: "flex-end",
    },
    BlureViewContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 12,
        backgroundColor: "rgba(0, 0, 0, 0.4)", // Semi-transparent overlay
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
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