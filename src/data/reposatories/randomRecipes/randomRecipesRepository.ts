import { RecipeItemModule } from "../../../domain/model/recipes/recipeItemModule"
import { RandomRecipeItemArrayMapper } from "../../../domain/model/recipes/recipeItemMpper"
import ApiClient from "../../api/apiClient"

export interface RandomRecipesRepositoryInterface {
    fetchRandomRecipes(): Promise<RecipeItemModule[]>
}

export const RandomRecipesRepository: RandomRecipesRepositoryInterface = {

    async fetchRandomRecipes(): Promise<RecipeItemModule[]> {
        const response = await ApiClient.get("random?number=7")
        let mapper = RandomRecipeItemArrayMapper(response as any)
        return mapper
    }
}