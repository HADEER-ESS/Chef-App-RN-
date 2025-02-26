// import { useDispatch, useSelector } from "react-redux"
// import { AppDispatch, RootState } from "../../../store/store"
// import { getRecipeByCategory } from "../../viewModel/RandomByCategory"
import { useEffect, useState } from "react"
// import { fetchRandomRecipes } from "../../viewModel/randomRecipes/randomSlice"
import { Dimensions } from "react-native"
import { useRandomRecipes } from "../../viewModel/randomRecipes/randomSlice"
import { useRecipeByCategory } from "../../viewModel/RandomByCategory"
import { RecipeItemModule } from "../../../domain/model/recipes/recipeItemModule"
import getDb from "../../../util/sqlite"

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

    const addToVaforiteRecipe = async (data: RecipeItemModule) => {
        try {
            const db = await getDb()
            await db.runAsync(
                `INSERT INTO favorite 
            (rec_id, rec_name, rec_img) 
            VALUES
            (? , ? , ?)`,
                [data.id, data.title, data.image]
            )
            console.log("inserted ")
        } catch (error) {
            console.log("inside insert catchccc", error)
        }

    }

    const checkIsFavorite = async (data: RecipeItemModule) => {
        console.log("function callllllllllllllllled ", data)
        try {
            const db = await getDb()
            console.log("here ", db)
            await db.execAsync(
                `CREATE TABLE IF NOT EXISTS favorite
                (rec_id INTEGER PRIMARY KEY NOT NULL,
                rec_name TEXT NOT NULL,
                rec_img TEXT)`
            )
            const result = await db.getFirstAsync(
                `SELECT * FROM favorite WHERE rec_id = ?`, [data.id]
            );
            console.log("recipe is exist in favorite ", result)
            if (result) {
                console.log("Recipe does not exist, adding...");
                await db.runAsync(
                    `DELETE FROM favorite WHERE rec_id = ${data.id}`
                )
            }
            else {
                addToVaforiteRecipe(data)
            }
        } catch (error) {
            console.log("caaaaaaaaaaaaaaaaaaaaaaaaaaaaatch ", error)
        }

    }


    return {
        categories,
        renderData,
        isLoading,
        error,
        handleCategoryChange,
        filterRecipeByCategory,
        checkIsFavorite
    }
}

export default HomeController