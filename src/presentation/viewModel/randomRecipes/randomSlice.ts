import { FetchRecipes } from "../../../domain/useCase/recipeItem";
import { useQuery } from "react-query";

// interface RandomRecipeState {
//     random_recipes: RecipeItemModule[],
//     isLoading: boolean,
//     error: string | null
// }

// export const fetchRandomRecipes = createAsyncThunk<RecipeItemModule[]>("fetch/randomRecipes", async () => {
//     return await FetchRecipes()
// })

export const useRandomRecipes = () => useQuery("randomRecipes", FetchRecipes)

// const initialState: RandomRecipeState = {
//     random_recipes: [],
//     isLoading: false,
//     error: null
// }


// const randomSlice = createSlice({
//     name: "random_recipe",
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(
//                 fetchRandomRecipes.pending, (state) => {
//                     state.isLoading = true,
//                         state.error = null
//                 }
//             )
//             .addCase(
//                 fetchRandomRecipes.fulfilled, (state, action) => {
//                     state.isLoading = false,
//                         state.error = null,
//                         state.random_recipes = action.payload
//                 }
//             )
//             .addCase(
//                 fetchRandomRecipes.rejected, (state, action) => {
//                     state.isLoading = false,
//                         state.error = action.error.message || "Failed to fetch recipes."
//                 }
//             )
//     }
// })



// export default randomSlice.reducer;
