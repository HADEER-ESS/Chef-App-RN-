import { useQuery } from "react-query";
import ViewMoreUseCase from "../../../domain/useCase/ViewMoreUseCase/ViewMoreUseCase";


const useAlRecipesData = (category: string) => {
    if (category === "" || category === "All") {
        return useRandomeRecipesAll()
    }
    return useRandomRecipesAllByCategory(category)
}

const useRandomeRecipesAll = () => useQuery("randomAll", ViewMoreUseCase.getAllRandomRecipes)

const useRandomRecipesAllByCategory = (category: string) => useQuery(["random_categoryAll", category], () => ViewMoreUseCase.getAllRandomRecipesByCategory(category))


export default useAlRecipesData