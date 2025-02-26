// import { createAsyncThunk, createSlice, SerializedError } from "@reduxjs/toolkit";
// import { RecipeByCategory } from "../../domain/model/category/categoryItem";
import { useQuery } from "react-query";
import GetRandomRecipeDataUseCase from "../../domain/useCase/randomCategory/RandomCategoryUseCase";



// export const getRecipeByCategory = createAsyncThunk<RecipeByCategory[], string>("recipe/category", async (name: string) => {
//     return await GetRandomRecipeByCategoryUseCase(name)
// })

export const useRecipeByCategory = (category: string) => useQuery(["categoryRecipes", category], () => GetRandomRecipeDataUseCase.randomReciptByCategory(category))


// interface RandomCategoryState {
//     isLoading: boolean,
//     error: string | null,
//     data: RecipeByCategory[]
// }


// const initialState: RandomCategoryState = {
//     isLoading: false,
//     error: null,
//     data: []
// }

// const RandomByCategorySlicer = createSlice({
//     name: "random_recipe_by_category",
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(getRecipeByCategory.pending, (state) => {
//                 state.isLoading = true
//             })
//             .addCase(getRecipeByCategory.fulfilled, (state, actions) => {
//                 console.log("action ", actions.payload)
//                 state.isLoading = false,
//                     state.data = actions.payload
//             })
//             .addCase(getRecipeByCategory.rejected, (state, action) => {
//                 state.isLoading = false,
//                     state.error = action.error.message || "Something went wrong"
//             })
//     }
// })

// export default RandomByCategorySlicer.reducer