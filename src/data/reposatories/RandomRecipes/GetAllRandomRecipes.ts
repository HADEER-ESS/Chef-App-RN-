import { RecipeItemModule } from "../../../domain/model/recipes/recipeItemModule"
import { RandomRecipeItemArrayMapper } from "../../../domain/model/recipes/recipeItemMpper"
import ApiClient from "../../api/apiClient"


interface GetAllRandomRecipesRepo {
    fetchAllRecipes(): Promise<RecipeItemModule[]>
}

export const GetAllRandomRecipesRepoImpl: GetAllRandomRecipesRepo = {

    async fetchAllRecipes(): Promise<RecipeItemModule[]> {
        const response = await ApiClient.get("random")
        console.log("response is ", response)
        let mapper = RandomRecipeItemArrayMapper(response as any)
        return mapper
    }
}