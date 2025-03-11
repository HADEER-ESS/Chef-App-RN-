import { useEffect, useState } from "react"
import getDb from "../../../../util/sqlite"
import { RecipeItemModule } from "../../../../domain/model/recipes/recipeItemModule"
import { useNavigation } from "@react-navigation/native"

type cutomeCachData = {
    rec_id: number,
    rec_img: string,
    rec_name: string
}

const FavoriteViewController = () => {
    const [favoritDish, setFavoriteDish] = useState<cutomeCachData[]>([])
    const navigation = useNavigation()

    useEffect(() => {
        getFavoriteData()
    }, [favoritDish])

    const getFavoriteData = async () => {
        try {
            const dp = await getDb()
            const favorite: cutomeCachData[] = await dp.getAllAsync(
                "SELECT * FROM favorite"
            )
            console.log("favorite ", favorite)
            setFavoriteDish(favorite)
        } catch (error) {
            console.log("error in get favorite recipes data ", error)
        }
    }
    const deleteFavoriteDish = async (id: number) => {
        try {
            console.log("id is ", id)
            const db = await getDb()
            await db.runAsync(
                `DELETE FROM favorite WHERE rec_id = ${id}`
            )
            getFavoriteData()
        } catch (error) {
            console.log("error in delete favorite dish", error)
        }
    }

    const favoriteGoBack = () => {
        navigation.goBack()
    }

    return {
        favoritDish,
        deleteFavoriteDish,
        favoriteGoBack
    }
}

export default FavoriteViewController