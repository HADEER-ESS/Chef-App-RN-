import { RandomRecipesRepository } from "../../../data/reposatories/randomRecipes/randomRecipesRepository"

export const FetchRecipes = async () => {
    return await RandomRecipesRepository.fetchRandomRecipes()
}