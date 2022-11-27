import { createContext, useState } from "react";

export const UserContext=createContext();

const initialUser={
    id:1,
    name:'Vicent',
    favoriteMovies:[1,2,3],
  }

export const UserProvider=({children})=>{

    const [user,setUser]=useState(initialUser)
    const login=()=>{setUser(initialUser)}
    const logout=()=>{setUser(null)}

    const toggleFavoriteMovieUser=(movieId)=>{

        const isFavorite=user.favoriteMovies.includes(movieId);
        const favoriteMovies=isFavorite
        ? user.favoriteMovies.filter(favMovId=>favMovId!==movieId) // Borrar
        : [...user.favoriteMovies,movieId] // Añadir


        setUser({
            ...user,
            favoriteMovies:favoriteMovies,
        })
    }

    const data={user,login,logout,toggleFavoriteMovieUser}

    return(
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}
