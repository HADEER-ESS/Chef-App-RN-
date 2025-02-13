import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import COLOR from '../../../../constant'

const MainBtn = () => {
    return (
        <TouchableOpacity style={styles.btn_container}>
            <Text style={styles.btn_text}>Get Started</Text>
        </TouchableOpacity>
    )
}

export default MainBtn

const styles = StyleSheet.create({
    btn_container: {
        borderRadius: 50,
        backgroundColor: COLOR.primary_btn
    },
    btn_text: {
        color: COLOR.white,
        fontSize: 18,
        fontWeight: 'medium',
        textAlign: 'center'
    }
})