import { CategoryMapperArray } from "../../../domain/model/category/CategoryResponseMapper"
import { RecipeItemModule } from "../../../domain/model/recipes/recipeItemModule"
import ApiClient from "../../api/apiClient"



interface GetAllRandomRecipesByCategoryRepo {

    fetchAllRecipesByCategory(catgory: string): Promise<RecipeItemModule[]>
}


export const GetAllRandomRecipesByCategoryRepoImpl: GetAllRandomRecipesByCategoryRepo = {

    async fetchAllRecipesByCategory(name: string): Promise<RecipeItemModule[]> {
        const response = await ApiClient.get(`findByIngredients?ingredients=${name}`)
        let mapper = CategoryMapperArray(response)
        return mapper
    }
}