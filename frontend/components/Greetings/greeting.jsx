import React from 'react'
import { Link } from 'react-router-dom'



const Greeting = props => {

    const isLoggedIn = () =>(
        <div className="navBar">
            <h3 className="welcomeMsg"> Welcome back {props.currentUser.username} </h3>
            <button onClick={props.logout} className="logout">Logout </button>
            
        </div>
    )

    const notLoggedIn = () => (
        <div className="navBar"> 
            <Link to='/signup' className="signup"> Sign Up</Link>
            <div className="seperator"></div>
            <Link to='/login' className="login"> Log In </Link>
        </div>
    )   

    return props.currentUser ? isLoggedIn() : notLoggedIn()
}

export default Greeting;