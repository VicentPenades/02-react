import { createContext } from "react";
import initialMovies from "../const/initialMovies";


export const MoviesContext=createContext();

export const MoviesProvider=({children})=>{

    const data={movies: initialMovies};

    return(
        <MoviesContext.Provider value={data}>
            {children}
        </MoviesContext.Provider>
    )
}