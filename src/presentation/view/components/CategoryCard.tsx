import React from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import COLOR from '../../../../constant'

type props = {
    name: string,
    isFocuse: boolean
    onclick: () => void
}

const CategoryCard = ({ name, isFocuse, onclick }: props) => {
    return (
        <View style={[styles.cardComponent, {}]}>
            <TouchableWithoutFeedback >
                <Text style={[styles.textStyle, {}]}>{name}</Text>
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