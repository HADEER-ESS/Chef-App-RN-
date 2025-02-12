import { configureStore } from "@reduxjs/toolkit";
import randomSlice from "../presentation/viewModel/randomRecipes/randomSlice"

const store = configureStore({
    reducer: {
        random_recipes: randomSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDisplatch = typeof store.dispatch
export default store