import React from "react"
import "../styles/register.css"
const Register =() => {
    return(
        <div className='loginContainer'>
             <h3>Register</h3>
        <div>
            <input type='email' name="email" placeholder="email"></input>
        </div>
        <div> 
            <input type ='password'name='password'placeholder="password"/>
        </div>
        <button> Registration </button>
        <button className='link'> Want to Login? </button>
       </div>
        
    )

}
export default Register