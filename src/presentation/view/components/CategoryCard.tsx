import React from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import COLOR from '../../../../constant'
import HomeController from '../../viewController/appController/homeController'

type props = {
    name: string,
    selected: string,
    onclick: () => void
}

const CategoryCard = ({ name, selected, onclick }: props) => {
    console.log("selected category now is ", selected);

    return (
        <View style={[styles.cardComponent, { backgroundColor: selected === name ? COLOR.primary_btn : COLOR.white }]}>
            <TouchableWithoutFeedback onPress={onclick}>
                <Text style={[styles.textStyle, { color: selected === name ? COLOR.white : COLOR.primary_btn }]}>{name}</Text>
            </TouchableWithoutFeedback>
        </View>

    )
}

export default CategoryCard

const styles = StyleSheet.create({
    cardComponent: {
        borderWidth: 1,
        borderColor: COLOR.primary_btn,
        borderRadius: 10,
        backgroundColor: COLOR.primary_btn,
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginStart: 12,
        marginVertical: 32
    },
    textStyle: {
        color: COLOR.white,
        fontSize: 12,
        fontWeight: 'regular'
    }
})