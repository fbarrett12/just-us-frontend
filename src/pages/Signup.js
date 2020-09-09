import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import userActions from '../redux/actions'

const Signup = props => {
   // initialize dispatch 
   const dispatch = useDispatch()

   // set up the local state with useState hook
   const [signupForm, setSignupForm] = useState({
       name: '',
       password: '',
   })

   // dynamically sets sign up routes 
//    let submitRoute = signupForm.role.toLowerCase
//    console.log(submitRoute)

   // controlled form functions
   const handleSubmit = e => {
       e.preventDefault()
       dispatch(userActions.newUserToDB(signupForm, "http://localhost:3000/users"))
       props.history.push('/')
       }

   const handleChange = e => {
       setSignupForm({...signupForm, [e.target.name]: e.target.value })
   }

   // destructure keys from local state to use in the form 
   const { name, password} = signupForm

   return (
       <form onSubmit={handleSubmit}>

           <h1>Join A Cause</h1>

           <label for="name\
           ">Enter Name</label>
           <input
               type="text"
               name="name"
               value={name}
               onChange={handleChange}
               placeholder="example: John Smith"
           />

           <label for="password">Enter Password</label>
           <input
               type="password"
               name="password"
               value={password}
               onChange={handleChange}
               placeholder="Password"
           /> <br/>

          
           <input type="submit" />

       </form>
   )
   }

export default Signup