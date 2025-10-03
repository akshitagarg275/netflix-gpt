import React, { useState, useRef } from 'react'
import Header from './Header'
import { checkValidData } from '../utils.js/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils.js/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils.js/userSlice';


const Login = () => {
 const [isSignInForm, setIsSignInForm] = useState(true);
 const [errorMessage, setErrorMessage] = useState("");
 const navigate = useNavigate();
 const dispatch = useDispatch();


 const email = useRef(null);
 const password = useRef(null);
 const name = useRef(null);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }

  const handleButtonClick = () => {
    // validate form data
    const error = checkValidData(email.current.value, password.current.value);
    setErrorMessage(error);

    // if error is not null means there is an error
    if (error) return;

    // sign in or sign up user
    if (!isSignInForm) {
      // sigup logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
          displayName:name.current.value, photoURL: "https://avatars.githubusercontent.com/u/83685421?v=4"
          }).then(() => {
           const {uid, email , displayName, photoURL} = auth.currentUser;
          console.log("dispatcching evwent: ", email)
          dispatch(addUser({uid:uid,email:email,displayName: displayName, photoURL:photoURL}))
            navigate("/browse")
          }).catch((error) => {
            setErrorMessage(error)
          });
        console.log('Successs user: ', user)
       
      })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + '-' + errorMessage)
  });
    } else {
      // sign in logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log('signin user: ', user)
        navigate("/browse")
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + '-' + errorMessage)
      });
    }
  }

  return (
    
    <div>
      <Header/>
    <div className='absolute'>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"/>
    </div>
    <form onSubmit={(e) => e.preventDefault() } className='w-1/4 absolute p-12 bg-black/80 my-36 mx-auto right-0 left-0 text-white'>
      <h1 className='font-bold text-3xl px-2 py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>

      {!isSignInForm && <input type="text" placeholder='full name' ref={name} className='p-4 my-4 w-full bg-gray-800'/>}
      <input type="text" placeholder='email address' ref={email} className='p-4 my-4 w-full bg-gray-800'/>
      <input type="password" placeholder='password' ref={password} className='p-4 my-4 w-full bg-gray-800'/>
      
      <p className='font-bold text-lg p-2 text-red-500'>{errorMessage}</p>

      <button onClick={handleButtonClick} className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"} </button>
      
      <p className='py-6 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now"}</p>
    </form>
    </div>
  )
}

export default Login