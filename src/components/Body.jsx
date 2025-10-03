import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils.js/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils.js/userSlice';


const Body = () => {
  // dispatch to dispatch action
  const dispatch = useDispatch()

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "/browse",
            element: <Browse/>
        }
    ])

    useEffect(() => {
      onAuthStateChanged(auth, (user) => { 
        if (user) {
          // User is signed in, and signed out
          const {uid, email , displayName, photoURL} = user;
          console.log("dispatcching evwent: ", email)
          dispatch(addUser({uid:uid,email:email,displayName: displayName, photoURL:photoURL}))
        } else {
          // signout dispatch
          dispatch(removeUser())
        }
      });
    }, [])

  return (
    <div>
       <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body