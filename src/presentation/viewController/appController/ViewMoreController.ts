import { useEffect, useState } from "react"
import { RecipeItemModule } from "../../../domain/model/recipes/recipeItemModule"
import { useQuery } from "react-query"
import { useRandomeRecipesAll, useRandomRecipesAllByCategory } from "../../viewModel/viewMoreViewModel/ViewMore"
import { RouteProp, useRoute } from "@react-navigation/native"
import { RootStackParamList } from "../../../navigation/NavigationType"

type MoreScreenRouteProps = RouteProp<RootStackParamList, "more">

const ViewMoreController = () => {

    const [recipesData, setRecipesData] = useState<RecipeItemModule[]>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | unknown>(null)

    const route = useRoute<MoreScreenRouteProps>()
    const { category } = route.params

    const { data: randomAllData, error: randomAllError, isLoading: randomAllLoading } = useRandomeRecipesAll();

    useEffect(() => {
        getRenderData()
    }, [category])

    const getRenderData = () => {
        if (category == "All" || category == "") {
            setRecipesData(randomAllData)
            setIsLoading(randomAllLoading)
            setError(randomAllError)
        }
        else {
            // const { data, isLoading, error } = useRandomRecipesAllByCategory(category)
            // setRecipesData(data)
            // setIsLoading(isLoading)
            // setError(error)
        }
    }

    return {
        category,
        recipesData,
        isLoading,
        error
    }
}


export default ViewMoreController