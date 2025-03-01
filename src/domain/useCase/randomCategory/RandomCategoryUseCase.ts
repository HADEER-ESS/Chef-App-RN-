import { fetchRandomRecipeByCategory } from "../../../data/reposatories/randomRecipesByNumber/RandomRecipeBasedOnCategoryRepository"
import { RandomRecipesRepository } from "../../../data/reposatories/randomRecipesByNumber/randomRecipesRepository"



class GetRandomRecipeDataUseCase {

    static async randomReciptByCategory(category: string) {
        return await fetchRandomRecipeByCategory.fetchRecipeByCategory(category)
    }
    static async randomRecipt() {
        return await RandomRecipesRepository.fetchRandomRecipes()
    }
}
export default GetRandomRecipeDataUseCase
