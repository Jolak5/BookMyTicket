import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://api.tvmaze.com/shows";
export const getMovies = createAsyncThunk("data/getMovies", async () => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    return error.message;
  }
});

export const MovieSlice = createSlice({
  name: "Movies",
  initialState: {
    movieList: [],
    latestmovie: [],
    userDetails: [],
    eachMovie: [
      {
        titles: "",
        summary: "",
        runtimes: ""
      }
    ],
    isLoading: true
  },
  reducers: {
    renderEachMovie: (state, action) => {
      const id = action.payload;
      const RenderedMovie = state.movieList.filter((item) => item.id === id);

      return { ...state, eachMovie: RenderedMovie };
    }
  },
  extraReducers: (builders) => {
    builders
      .addCase(getMovies.pending, (state) => ({
        ...state,
        isLoading: true
      }))
      .addCase(getMovies.fulfilled, (state, action) => {
        const data = action.payload.map((item) => {
          return {
            ...item,
            ids: item.id,
            picture: item.image.original,
            title: item.name,
            genre: item.genres[0],
            runtimes: item.runtime,
            ratings: item.rating.average
          };
        });
        const singleMovie = data[12];

        return {
          ...state,
          isLoading: false,
          movieList: data,
          latestmovie: singleMovie
        };
      })
      .addCase(getMovies.rejected, (state) => ({
        ...state,
        isLoading: true
      }));
  }
});

export const { renderEachMovie, bookMovie } = MovieSlice.actions;
export default MovieSlice.reducer;
