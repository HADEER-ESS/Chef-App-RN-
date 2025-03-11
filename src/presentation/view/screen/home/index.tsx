import React, { useRef } from 'react'
import { Animated, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import COLOR from '../../../../../constant'
import SearchComponent from '../../components/SearchComponent'
import HomeController from '../../../viewController/appController/homeController'
import CardComponent from '../../components/CardComponent'
import { RecipeItemModule } from '../../../../domain/model/recipes/recipeItemModule'
import CategoryCard from '../../components/CategoryCard'
import { useNavigation } from '@react-navigation/native'
import { MoreScreenNavigationProp } from '../../../../navigation/NavigationType'



const AnimatiedFlatList = Animated.createAnimatedComponent(FlatList)

const HomeScreen = () => {
    const { selectedCategory, favoritesDish, renderData, handleCategoryChange, categories, checkIsFavorite } = HomeController()
    const scrollX = useRef(new Animated.Value(0)).current
    const navigation = useNavigation<MoreScreenNavigationProp>()

    return (
        <ScrollView style={styles.screenView}>
            <Text>Hello</Text>
            <Text style={styles.MainTextStyle}>Discover Your Favorite
                <Text style={[styles.MainTextStyle, { color: COLOR.primary_btn }]}> Recipe!</Text>
            </Text>
            <SearchComponent from='home' />
            <FlatList
                horizontal={true}
                data={categories}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => `${item}`}
                renderItem={({ item }) => <CategoryCard name={item} onclick={() => handleCategoryChange(item)} selected={selectedCategory} />}
            />
            {/* Title and view All navigator */}
            <View style={styles.randomRecipesContainer}>
                <Text style={styles.randomRecipeTitle}>Top Recipes</Text>
                <Text
                    style={styles.randomRecipeViewAll}
                    onPress={() => navigation.navigate("more", { category: selectedCategory })}
                >
                    View All
                </Text>
            </View>
            <AnimatiedFlatList
                data={renderData}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => `${item}-${index}`}
                contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 27 }}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: true }
                )}
                scrollEventThrottle={16}
                renderItem={({ item, index }) => <CardComponent addFav={checkIsFavorite} isLoved={favoritesDish} index={index} data={item as RecipeItemModule} scrollx={scrollX} />}
            />
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
        flexShrink: 2,
        marginBottom: 24
    },
    randomRecipesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    randomRecipeTitle: {
        color: COLOR.black,
        fontSize: 20,
        fontWeight: 'bold'
    },
    randomRecipeViewAll: {
        color: COLOR.gray,
        fontSize: 13,
        fontWeight: 'regular'
    }
})