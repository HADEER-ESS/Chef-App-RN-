import { GetAllRandomRecipesRepoImpl } from "../../../data/reposatories/RandomRecipes/GetAllRandomRecipes";
import { GetAllRandomRecipesByCategoryRepoImpl } from "../../../data/reposatories/RandomRecipes/GetAllRandomRecipesByCategory";



class ViewMoreUseCase {
    static async getAllRandomRecipes() {
        return await GetAllRandomRecipesRepoImpl.fetchAllRecipes()
    }

    static async getAllRandomRecipesByCategory(name: string) {
        return await GetAllRandomRecipesByCategoryRepoImpl.fetchAllRecipesByCategory(name)
    }
}


export default ViewMoreUseCase