import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import COLOR from '../../../../constant'

type props = {
    onpress: () => void,
    text: string,
    btn_backGround: string,
    btn_text: string
}

const MainBtn = ({ onpress, text, btn_backGround, btn_text }: props) => {
    return (
        <TouchableOpacity onPress={onpress} style={[styles.btn_container, { backgroundColor: btn_backGround }]}>
            <Text style={[styles.btn_text, { color: btn_text }]}>{text}</Text>
        </TouchableOpacity>
    )
}

export default MainBtn

const styles = StyleSheet.create({
    btn_container: {
        borderRadius: 50,
        alignSelf: 'center'
    },
    btn_text: {
        fontSize: 18,
        fontWeight: 'medium',
        textAlign: 'center',
        marginVertical: 16,
        marginHorizontal: 62,
    }
})