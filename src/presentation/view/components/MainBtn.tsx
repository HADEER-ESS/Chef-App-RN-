import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import COLOR from '../../../../constant'

type props = {
    onpress: () => void,
    text?: string
}

const MainBtn = ({ onpress }: props) => {
    return (
        <TouchableOpacity onPress={onpress} style={styles.btn_container}>
            <Text style={styles.btn_text}>Get Started</Text>
        </TouchableOpacity>
    )
}

export default MainBtn

const styles = StyleSheet.create({
    btn_container: {
        borderRadius: 50,
        backgroundColor: COLOR.primary_btn,
        alignSelf: 'center'
    },
    btn_text: {
        color: COLOR.white,
        fontSize: 18,
        fontWeight: 'medium',
        textAlign: 'center',
        marginVertical: 16,
        marginHorizontal: 62,
    }
})