//Search Stack

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../presentation/view/screen/home"
import SearchScreen from "../presentation/view/screen/search"
import ProfileScreen from "../presentation/view/screen/profile"
import FavoriteScreen from "../presentation/view/screen/favorite"
import ViewMoreScreen from "../presentation/view/screen/home/viewMore"
import DetailsScreen from "../presentation/view/screen/home/details"
import SplashScreen from "../presentation/view/screen/Auth/splash"
import OnboardingScreen from "../presentation/view/screen/Auth/onboarding"
import { Octicons, Foundation, AntDesign, Ionicons } from '@expo/vector-icons';
import COLOR from "../../constant"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Pressable, StyleSheet, TouchableOpacity, View } from "react-native"
const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()


//Favorite Stack
const FavoriteNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="favorite_main" component={FavoriteScreen} />
        </Stack.Navigator>
    )
}

//Profile Stack    <= Will not implemented first
const ProfileNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="profile_main" component={ProfileScreen} />
        </Stack.Navigator>
    )
}

// Search Stack
const SearchNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="search_main" component={SearchScreen} />
        </Stack.Navigator>
    )
}


//Home Stack
const HomeNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="main" component={HomeScreen} />
            <Stack.Screen name="more" component={ViewMoreScreen} />
            <Stack.Screen name="details" component={DetailsScreen} />
        </Stack.Navigator>
    )
}

//Tab will be parent
const MainTab = () => {
    const instent = useSafeAreaInsets()
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: COLOR.primary_btn,
                    borderRadius: 36,
                    marginBottom: 16,
                    height: 80 + instent.bottom,
                },
                tabBarIconStyle: {
                    alignSelf: 'center',
                    height: "100%",
                },
                tabBarShowLabel: false,
                tabBarActiveTintColor: COLOR.white,
                tabBarInactiveTintColor: COLOR.white,
                tabBarButton: (props) => <Pressable {...props} android_ripple={{ color: COLOR.transparent }} />
            }}
        >
            <Tab.Screen
                name="home"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <>
                            {
                                focused ?
                                    <Foundation name="home" size={size} color={color} />
                                    :
                                    <Octicons name="home" size={size} color={color} />
                            }

                        </>
                    ),
                }}
            />
            <Tab.Screen
                name="favorite"
                component={FavoriteNavigator}
                options={{
                    tabBarIcon: ({ size, color, focused }) => (
                        <AntDesign size={size} color={color} name={focused ? "heart" : "hearto"} />
                    )
                }}
            />
            <Tab.Screen
                name="search"
                component={SearchNavigator}
                options={{
                    tabBarIcon: ({ size, color, focused }) => (
                        <>
                            {
                                focused &&
                                <View style={[styles.fillSearchIcon, { width: size - 8, height: size - 8 }]} />
                            }
                            <Octicons size={size} color={color} name={"search"} />
                        </>

                    )
                }}
            />
            <Tab.Screen
                name="user"
                component={ProfileNavigator}
                options={{
                    tabBarIcon: ({ size, color, focused }) => (
                        <Ionicons size={size} color={color} name={focused ? "person" : "person-outline"} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="splash" component={SplashScreen} />
            <Stack.Screen name="onboarding" component={OnboardingScreen} />
            <Stack.Screen name="main_app" component={MainTab} />
        </Stack.Navigator>
    )
}

//Put the Main Navigation here
const NavigationController = () => {
    return (
        <NavigationContainer>
            <AuthStack />
        </NavigationContainer>
    )
}

export default NavigationController

const styles = StyleSheet.create({
    fillSearchIcon: {
        top: 24,
        borderRadius: 10,
        backgroundColor: COLOR.white,
        position: 'absolute',
    }
})