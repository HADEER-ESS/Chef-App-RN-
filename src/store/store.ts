import { configureStore } from "@reduxjs/toolkit";
import randomSlice from "../presentation/viewModel/randomRecipes/randomSlice"
import RandomByCategorySlicer from "../presentation/viewModel/RandomByCategory"

const store = configureStore({
    reducer: {
        random_recipes: randomSlice,
        randome_by_category: RandomByCategorySlicer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store