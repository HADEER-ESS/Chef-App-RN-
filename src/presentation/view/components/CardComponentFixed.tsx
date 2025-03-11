import React from 'react'
import { Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ITEM_WIDTH } from '../../viewController/appController/homeController';
import COLOR from '../../../../constant';
import { RecipeItemModule } from '../../../domain/model/recipes/recipeItemModule';
import FavoriteViewController from '../screen/favorite/FavoriteScreenViewController';

type props = {
    data: {
        rec_id: number,
        rec_img: string,
        rec_name: string,
    }
}

const CardComponentFixed = ({ data }: props) => {
    const { deleteFavoriteDish } = FavoriteViewController()
    return (
        <View
            style={styles.viewContainerCard}
        >
            <TouchableOpacity key={data.rec_id} onPress={() => { }}>
                <ImageBackground
                    style={styles.backgroundImgaeStyle}
                    source={{ uri: data?.rec_img }}
                    imageStyle={{ borderRadius: 32 }}
                >
                    <TouchableOpacity onPress={() => deleteFavoriteDish(data.rec_id)} style={styles.iconContainerStyle}>
                        <MaterialCommunityIcons name='heart' size={24} color={COLOR.white} />
                    </TouchableOpacity>
                    <View style={styles.BlureViewContainer}>
                        <Text style={styles.textStyle}>{data?.rec_name}</Text>
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
    },
    backgroundImgaeStyle: {
        width: '100%',
        height: 200, // Adjust height based on design needs
        // justifyContent: "flex-end",
        justifyContent: 'space-between'
    },
    BlureViewContainer: {
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
        backgroundColor: "rgba(0, 0, 0, 0.4)", // Semi-transparent overlay
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        flexWrap: 'wrap',
        maxWidth: "100%"
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
        margin: 8,
        alignSelf: 'flex-end'
    }
})