import { RecipeByCategory } from "./categoryItem"
import { CategoryResponseItem } from "./CategoryItemResponse"

export const CategoryMapper = (response: CategoryResponseItem): RecipeByCategory => {
    return {
        id: response.id,
        title: response.title,
        image: response.image
    }
}

export const CategoryMapperArray = (responseArray: CategoryResponseItem[]): RecipeByCategory[] => {
    return responseArray.map(CategoryMapper)
}