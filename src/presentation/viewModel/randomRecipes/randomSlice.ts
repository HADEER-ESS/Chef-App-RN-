import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RecipeItem } from "../../../domain/model/recipes/recipeItem";
import { FetchRecipes } from "../../../domain/useCase/recipeItem";

interface RandomRecipeState {
    random_recipes: RecipeItem[],
    isLoading: boolean,
    error: string | null
}

export const fetchRandomRecipes = createAsyncThunk<RecipeItem[]>("fetch/randomRecipes", async () => {
    return await FetchRecipes()
})

const initialState: RandomRecipeState = {
    random_recipes: [],
    isLoading: false,
    error: null
}


const randomSlice = createSlice({
    name: "random_recipe",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(
                fetchRandomRecipes.pending, (state) => {
                    state.isLoading = true,
                        state.error = null
                }
            )
            .addCase(
                fetchRandomRecipes.fulfilled, (state, action) => {
                    state.isLoading = false,
                        state.error = null,
                        state.random_recipes = action.payload
                }
            )
            .addCase(
                fetchRandomRecipes.rejected, (state, action) => {
                    state.isLoading = false,
                        state.error = action.error.message || "Failed to fetch recipes."
                }
            )
    }
})



export default randomSlice.reducer;
