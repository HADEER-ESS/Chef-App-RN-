import { RecipeProps } from "../../model/recipes/receipes";



export default function addToFavorite(
    recipe: RecipeProps,
    recipeItems: RecipeProps[]
): RecipeProps[] {

    const addFavorite = recipeItems.forEach(item => {
        recipe.isFavorite = item.id == recipe.id
    })
    return recipeItems
}