import React from 'react'
import { Link } from 'react-router-dom'



const Greeting = props => {

    const isLoggedIn = () =>(
        <div>
                <p className="welcomeMsg"> Welcome back {props.currentUser.username} </p>

            <div className="navBar">
                <br/>
                <Link to='/' className="login" onClick={props.logout}> Log Out</Link>
                
            </div>
        </div>
    )

    const notLoggedIn = () => (
        <div className="navBar"> 
            <Link to='/signup' className="signup"> Sign Up</Link>
            
            <Link to='/login' className="login"> Log In </Link>
        </div>
    )   

    return props.currentUser ? isLoggedIn() : notLoggedIn()
}

export default Greeting;