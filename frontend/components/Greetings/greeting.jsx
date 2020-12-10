import React from 'react'
import { Link } from 'react-router-dom'


const Greeting = props => {

    const isLoggedIn = () =>(
        <div>
            <img class_name="headerImage" src="/home/oliver/AllTreks/AllTreks/app/assets/images/IMG_2945.JPG"  alt="Alltreks"/>
            <h3> Welcome back {props.currentUser.username} </h3>
            <button onClick={props.logout}>Logout </button>
        </div>
    )

    const notLoggedIn = () => (
        <div> 
            <Link to='/signup'> Sign Up</Link>
            <Link to='/login' > Login </Link>
        </div>
    )   

    return props.currentUser ? isLoggedIn() : notLoggedIn()
}

export default Greeting;