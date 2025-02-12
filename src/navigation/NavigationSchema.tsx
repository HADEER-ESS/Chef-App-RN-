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
const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()


//Favorite Stack
const FavoriteNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="" component={FavoriteScreen} />
        </Stack.Navigator>
    )
}

//Profile Stack    <= Will not implemented first
const ProfileNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="" component={ProfileScreen} />
        </Stack.Navigator>
    )
}

// Search Stack
const SearchNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="" component={SearchScreen} />
        </Stack.Navigator>
    )
}


//Home Stack
const HomeNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="main" component={HomeScreen} />
            <Stack.Screen name="more" component={ViewMoreScreen} />
            <Stack.Screen name="details" component={DetailsScreen} />
        </Stack.Navigator>
    )
}

//Tab will be parent
const MainTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="home" component={HomeNavigator} />
            <Tab.Screen name="favorite" component={FavoriteNavigator} />
            <Tab.Screen name="search" component={SearchNavigator} />
            <Tab.Screen name="user" component={ProfileNavigator} />
        </Tab.Navigator>
    )
}

const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="splash" component={SplashScreen} />
            <Stack.Screen name="onboarding" component={OnboardingScreen} />
        </Stack.Navigator>
    )
}

//Put the Main Navigation here
const NavigationController = () => {
    return (
        <NavigationContainer>
            <AuthStack />
            <MainTab />
        </NavigationContainer>
    )
}

export default NavigationController