import { useEffect, useState } from "react"
import { RecipeItemModule } from "../../../domain/model/recipes/recipeItemModule"
import { useQuery } from "react-query"
import useAlRecipesData from "../../viewModel/viewMoreViewModel/ViewMore"
import { RouteProp, useRoute } from "@react-navigation/native"
import { RootStackParamList } from "../../../navigation/NavigationType"

type MoreScreenRouteProps = RouteProp<RootStackParamList, "more">

const ViewMoreController = () => {

    // const [recipesData, setRecipesData] = useState<RecipeItemModule[]>()
    // const [isLoading, setIsLoading] = useState<boolean>(false)
    // const [error, setError] = useState<string | unknown>(null)

    const route = useRoute<MoreScreenRouteProps>()
    const { category } = route.params

    const { data, error, isLoading } = useAlRecipesData(category)

    console.log("data is 1111 ", data)


    return {
        category,
        data,
        isLoading,
        error
    }
}


export default ViewMoreController