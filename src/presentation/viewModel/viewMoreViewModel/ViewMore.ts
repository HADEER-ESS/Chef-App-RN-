import { useQuery } from "react-query";
import ViewMoreUseCase from "../../../domain/useCase/ViewMoreUseCase/ViewMoreUseCase";



export const useRandomeRecipesAll = () => useQuery("randomAll", ViewMoreUseCase.getAllRandomRecipes)

export const useRandomRecipesAllByCategory = (category: string) => useQuery(["random_categoryAll", category], () => ViewMoreUseCase.getAllRandomRecipesByCategory(category))
