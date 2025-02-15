import AsyncStorage from "@react-native-async-storage/async-storage"
import { useNavigation } from "@react-navigation/native"

const AuthController = () => {

    const navigation = useNavigation()

    const handleNavigation = () => {
        console.log("called")
        setTimeout(async () => {
            await AsyncStorage.getItem("first") ? navigation.navigate("main_app" as never) :
                navigation.navigate("onboarding" as never)
        }, 3000)
    }

    const startBtnHandling = async () => {
        await AsyncStorage.setItem("first", "1")
        navigation.navigate("main_app" as never)
    }

    return {
        handleNavigation,
        startBtnHandling
    }
}




export default AuthController

