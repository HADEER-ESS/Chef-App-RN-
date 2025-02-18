import { RecipeByCategory } from "../../domain/model/category/categoryItem";
import { CategoryMapperArray } from "../../domain/model/category/CategoryResponseMapper";
import ApiClient from "../api/apiClient";


export interface RandomRecipeWithCategoryRepositoryInterface {
    fetchRecipeByCategory(category: string): Promise<RecipeByCategory[]>
}


export const fetchRandomRecipeByCategory: RandomRecipeWithCategoryRepositoryInterface = {

    async fetchRecipeByCategory(category: string): Promise<RecipeByCategory[]> {
        console.log("called for category")
        const response = await ApiClient.get(`findByIngredients?ingredients=${category}&number=5`)
        let mapper = CategoryMapperArray(response.data)
        console.log("response is ", mapper)
        return mapper
    }
}