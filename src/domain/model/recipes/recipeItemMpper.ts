import { RecipeItem, RecipesData } from "./recipeItem";
import { RecipeItemModule } from "./recipeItemModule";

const RandomRecipeItemMapper = (response: RecipeItem): RecipeItemModule => {
    return {
        id: response.id,
        title: response.title,
        image: response.image
    }
}

export const RandomRecipeItemArrayMapper = (responseArray: RecipesData): RecipeItemModule[] => {
    return responseArray.recipes.map(RandomRecipeItemMapper)
}