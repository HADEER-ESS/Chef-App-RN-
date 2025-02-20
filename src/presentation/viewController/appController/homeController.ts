// import { useDispatch, useSelector } from "react-redux"
// import { AppDispatch, RootState } from "../../../store/store"
// import { getRecipeByCategory } from "../../viewModel/RandomByCategory"
import { useEffect, useState } from "react"
// import { fetchRandomRecipes } from "../../viewModel/randomRecipes/randomSlice"
import { Dimensions } from "react-native"
import { useRandomRecipes } from "../../viewModel/randomRecipes/randomSlice"
import { useRecipeByCategory } from "../../viewModel/RandomByCategory"

const { width } = Dimensions.get('window')
export const ITEM_WIDTH = width * 0.8

const HomeController = () => {

    // const dispatch: AppDispatch = useDispatch()
    // const { data, isLoading, error } = useSelector((state: RootState) => state.randome_by_category)
    // const { random_recipes } = useSelector((state: RootState) => state.random_recipes)
    const [renderData, setRenderData] = useState<any[]>([])
    const [selectedCategory, setSelectedCategory] = useState<string>("All")

    const categories = ["All", "Meat", "Vegetables", "Fruit", "Chicken", "Soup", "Dessert"]
    const { data, isLoading, error } = useRandomRecipes()
    const { data: randomCategory, isLoading: loadingCategory, error: errorCategory } = useRecipeByCategory(selectedCategory)

    const handleCategoryChange = (cat: string) => {
        setSelectedCategory(cat)
    }

    useEffect(() => {
        filterRecipeByCategory()
    }, [data, randomCategory])



    const filterRecipeByCategory = () => {
        if (selectedCategory === "All" || selectedCategory === "") {
            setRenderData(data ?? [])
        }
        else {
            setRenderData(randomCategory ?? [])
        }
    }


    return {
        categories,
        renderData,
        isLoading,
        error,
        handleCategoryChange,
        filterRecipeByCategory
    }
}

export default HomeController