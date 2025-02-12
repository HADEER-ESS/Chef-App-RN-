import axios from "axios"
import { RecipeItem } from "../../../domain/model/recipes/recipeItem"

export interface RandomRecipesRepositoryInterface {
    fetchRandomRecipes(): Promise<RecipeItem[]>
}

export const RandomRecipesRepository: RandomRecipesRepositoryInterface = {

    async fetchRandomRecipes(): Promise<RecipeItem[]> {
        const response = await axios.get("random?number=7")
        console.log("response from random recipes ", response.data[0])
        return response.data
    }
}