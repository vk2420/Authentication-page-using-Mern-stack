import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

const LoginPage = () => {

const[loginData,setLoginData]=useState({
    username:'',
    password:''
})

//submit function
const handleLoginSubmit =async(e)=>{
 e.preventDefault();             // now I have to check the details are registered or not so for that have to create api 

 try{
    const response = await axios.post
    ('http://localhost:8000/login',loginData);
    const {success,message}=
    response.data;
    if (success){
        console.log('Login successfully')
    }
    else {
            console.log(message);
    }
    setLoginData({
        username:'',
        password:''

    })
 }
 catch(error){
    console.error('Login error',error)

 }
}
    const handleLoginChange=(e)=>{
        const{name,value}=e.target;
        setLoginData((prevData)=>({
            ...prevData,
            [name]:value
        }))
    }
  return (
    <div>
      <h1>  Login Page</h1> 
      <form onSubmit={handleLoginSubmit}>
        <input
        type='text'
        name='username'
        placeholder='Username'
        value={loginData.username}     //hamare hsiab se set karni hoti hai value hame 
        onChange={handleLoginChange}
        required
        />
        <input
        type='password'
        name='password'
        placeholder='Password'
        value={loginData.password}     //hamare hsiab se set karni hoti hai value hame 
        onChange={handleLoginChange}
        required
        />
        <button type='submit'>Login</button>
        <p>
            not registered yet?
            <Link to ='/registration'>Register here</Link>
        </p>
      </form>
    </div>
  )
}

export default LoginPage
