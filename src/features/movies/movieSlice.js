import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    movies:[]
};
// extra reducer: this is used when there are similar type of actions which are being performed we just don't create a seprate reducer in slice.
// we can create actions and then using the case basis we can distiguish among the actions which are possible.
const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers:{
        addMovies: (state,{payload})=>{
            state.movies = payload;
        }
    }
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state)=>{
    return state.movies.movies;
}
export default movieSlice.reducer;