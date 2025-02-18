import { fetchRandomRecipeByCategory } from "../../../data/reposatories/RandomRecipeBasedOnCategoryRepository"


export const GetRandomRecipeByCategoryUseCase = async (category: string) => {
    return await fetchRandomRecipeByCategory.fetchRecipeByCategory(category)
}