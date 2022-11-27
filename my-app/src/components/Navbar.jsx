import React from 'react'
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

export const Navbar = () => {

    const {user,login,logout}=useContext(UserContext)

  return (
    <nav className="navbar navbar-dark bg-dark mb-4">
        <div className='container'>
            <span className='navbar-brand'>
                <h1>{`Muy buenas ${user?user.name:'y BIENVENIDO'}`}</h1>
            </span>
            {user
                ?<button className='btn btn-primary' onClick={logout}>
                    Cerrar sesión
                </button>
                :<button className='btn btn-primary' onClick={login}>
                    Iniciar sesión
                </button>
            }
        </div>       
    </nav>   
  )
}
