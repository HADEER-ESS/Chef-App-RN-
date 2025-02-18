import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../../store/store"
import { getRecipeByCategory } from "../../viewModel/RandomByCategory"
import { useEffect, useState } from "react"
import { fetchRandomRecipes } from "../../viewModel/randomRecipes/randomSlice"

const HomeController = () => {

    const dispatch: AppDispatch = useDispatch()
    const { data, isLoading, error } = useSelector((state: RootState) => state.randome_by_category)
    const { random_recipes } = useSelector((state: RootState) => state.random_recipes)
    const [renderData, setRenderData] = useState<any[]>([])
    const [selectedCategory, setSelectedCategory] = useState<string>("All")

    const categories = ["All", "Meat", "Vegetables", "Fruit", "Chicken", "Soup", "Dessert"]

    const handleCategoryChange = (cat: string) => {
        setSelectedCategory(cat)
    }

    useEffect(() => {
        filterRecipeByCategory()
    }, [selectedCategory])



    const filterRecipeByCategory = () => {
        if (selectedCategory === "All" || selectedCategory === "") {
            dispatch(fetchRandomRecipes())
        }
        else {
            dispatch(getRecipeByCategory(selectedCategory))
        }
    }


    return {
        categories,
        data,
        random_recipes,
        isLoading,
        error,
        handleCategoryChange,
        filterRecipeByCategory
    }
}

export default HomeController