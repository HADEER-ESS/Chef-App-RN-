import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import COLOR from '../../../../constant'

const SearchComponent = () => {
    return (
        <View style={styles.editTextContainer}>
            {/* ICON */}
            <AntDesign name='search1' size={24} color={COLOR.gray} />
            {/* Edit text */}
            <TextInput
                style={styles.editTextField}
                placeholder='search for recipes...'
                placeholderTextColor={COLOR.gray}
            />
            {/* ICON */}
            <View style={styles.iconsContainer}>
                <MaterialCommunityIcons style={{ alignSelf: 'center' }} name='settings-helper' size={24} color={COLOR.white} />
            </View>
        </View>
    )
}

export default SearchComponent

const styles = StyleSheet.create({
    editTextContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        backgroundColor: COLOR.secondry_btn,
        borderRadius: 10,
        padding: 8,
    },
    editTextField: {
        textAlign: 'left',
        width: '78%'
    },
    iconsContainer: {
        backgroundColor: COLOR.primary_btn,
        paddingVertical: 7,
        paddingHorizontal: 6,
        borderRadius: 10,
    }
})