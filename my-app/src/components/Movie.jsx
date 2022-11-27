import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext';

export const Movie = ({movie}) => {

    const {toggleFavoriteMovieUser,user}=useContext(UserContext)

    const imgStyles={
        height:'250px',
        objectFit:'cover',
    };

    const isFavorite=user?.favoriteMovies?.includes(movie.id);

  return (
    <div className='card'>
        <img src={movie.imageUrl} alt={movie.title} className='card-img-top' style={imgStyles}/>
        <div className='card-body'>
            <h4>{movie.title}</h4>
            {user?.id?
            <button 
                className={isFavorite?'btn btn-success':'btn btn-outline-primary'}
                onClick={()=>toggleFavoriteMovieUser(movie.id)}>
                    Favoritos
                </button>:null
                }
        </div>
        </div>
  )
}
