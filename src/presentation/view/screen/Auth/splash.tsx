import React, { useEffect } from 'react'
import { Image, StyleSheet, View, Text, Dimensions, ImageBackground } from 'react-native'
import COLOR from '../../../../../constant'
import AuthController from '../../../viewController/authcontroller/authController'

const SplashScreen = () => {
    const { handleNavigation } = AuthController()
    useEffect(() => {
        handleNavigation()
    }, [])
    return (
        <View
            style={styles.backgroundView}
        >
            <ImageBackground
                source={require("../../../../../assets/background_splash.png")}
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            >
                <Image
                    source={require("../../../../../assets/chef_icv.png")}
                    style={styles.imageStyle}
                />
            </ImageBackground>
        </View>

    )
}

export default SplashScreen

const styles = StyleSheet.create({
    backgroundView: {
        backgroundColor: COLOR.white,
        flex: 1,
    },
    imageStyle: {
        resizeMode: "contain",
        width: Dimensions.get("screen").width / 2,
        height: Dimensions.get("screen").height / 2,
        alignSelf: 'center'
    }
})