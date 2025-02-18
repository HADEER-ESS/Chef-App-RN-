import React from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'
import COLOR from '../../../../../constant'
import SearchComponent from '../../components/SearchComponent'
import HomeController from '../../../viewController/appController/homeController'

const HomeScreen = () => {
    const { data, random_recipes, isLoading, error } = HomeController()

    console.log("income data is ", random_recipes)
    return (
        <ScrollView style={styles.screenView}>
            <Text>Hello</Text>
            <Text style={styles.MainTextStyle}>Discover Your Favorite
                <Text style={[styles.MainTextStyle, { color: COLOR.primary_btn }]}> Recipe!</Text>
            </Text>
            <SearchComponent />
        </ScrollView>
    )
}

export default HomeScreen
const styles = StyleSheet.create({
    screenView: {
        flex: 1,
        backgroundColor: COLOR.white,
        paddingTop: 43,
        paddingHorizontal: 16
    },
    welcomeTextStyle: {
        fontSize: 13,
        textAlign: 'left',
        color: COLOR.gray,
        fontWeight: '400'
    },
    MainTextStyle: {
        color: COLOR.black,
        fontSize: 24,
        fontWeight: 'bold',
        width: 200,
        flexShrink: 2
    }
})