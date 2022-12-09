import React, { useState, useEffect } from 'react'
import { useCallback } from 'react'
import { getPosts } from '../helpers/getPosts'
import { getUser } from '../helpers/getUser'

// API: https://jsonplaceholder.typicode.com/

export const FetchCard = () => {

    const [user, setUser] = useState({})
    const [posts, setPosts] = useState([])

    const updateUser=()=>{
        getUser()
            .then((newUser)=>setUser(newUser))
    }
    const updatePosts=useCallback(()=>{
        getPosts(user.id)
            .then((newPosts)=>setPosts(newPosts))
    },[user.id])

    useEffect(() => {
    updateUser()
    }, [])

    useEffect(() => {
        updatePosts()
    }, [user.id,updatePosts])

  return (
    <>
        <button onClick={updateUser}>New User</button>

        <h2>User: {user.name}</h2>
        <h2>E-mail: {user.email}</h2>
        <br></br>
        <h2>Posts:</h2>
        <ul>
            {posts.map(post=><li key={post.id}>{post.title}</li>)}
        </ul>

    </>
  )
}
