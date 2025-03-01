import { NativeStackNavigationProp } from "@react-navigation/native-stack"

type RootStackParamList = {
    splash: undefined,
    onboarding: undefined,
    main_app: undefined,
    main: undefined,
    more: { category: string },
    details: undefined,
    favorite_main: undefined,
    profile_main: undefined,
    search_main: undefined
}

type MoreScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "more">

export { RootStackParamList, MoreScreenNavigationProp }