import React, { useEffect } from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import MainBtn from '../../components/MainBtn'
import COLOR from '../../../../../constant'
import AuthController from '../../../viewController/authcontroller/authController'

const OnboardingScreen = () => {
    const { startBtnHandling } = AuthController()
    return (
        <View style={{ flex: 1 }}>
            <View
                style={styles.headerMain}
            >
                <Image
                    source={require("../../../../../assets/onboarding_img.png")}
                    style={styles.imageStyle}
                />
            </View>
            <Text style={styles.mainTextStyle}>
                Let's Cook Something Amazing
            </Text>
            <Text style={styles.subMainTextStyle}>
                Start exploring, cooking, and savoring delicious
                recipes today. Enjoy your culinary journey with
                us!
            </Text>
            <View style={{ marginTop: "30%" }}>
                <MainBtn
                    onpress={startBtnHandling}
                    text='Get Started'
                    btn_backGround={COLOR.primary_btn}
                    btn_text={COLOR.white}
                />
            </View>

        </View>
    )
}

export default OnboardingScreen

const styles = StyleSheet.create({
    headerMain: {
        height: "50%",
        backgroundColor: COLOR.primary_btn,
        borderBottomRightRadius: 250,
        borderBottomLeftRadius: 250,
    },
    imageStyle: {
        resizeMode: 'contain',
        alignSelf: "center",
        marginTop: 42,
        // backgroundColor: "green"
    },
    mainTextStyle: {
        color: COLOR.black,
        textAlign: 'center',
        marginTop: 32,
        fontSize: 24,
        fontWeight: 'bold',
        marginHorizontal: 85
    },
    subMainTextStyle: {
        color: COLOR.gray,
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'regular',
        marginTop: 16,
        marginHorizontal: 42
    }
})