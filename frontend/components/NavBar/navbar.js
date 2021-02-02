import React, {useEffect, useState} from 'react' 
import {Link} from 'react-router-dom'




const NavBar = (props) => {
    const [user, setUser] = useState(props.currentUser)

    useEffect(() => {
        // console.log('useEffect')
        setUser(props.currentUser)
    }, [props.currentUser])

    const isLoggedIn = () => (
        <div>
            <p className="welcomeMsg"> Welcome back {props.currentUser.username} </p>

            <div className="navBar">
                <br />
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
    
    

    
    return(
        <div> 
            {/* {console.log(props.currentUser)} */}

            <h1 className="splashHeader">
                <Link to="/" className="AllTreks">AllTreks</Link>
            </h1>


            {Object.values(props.currentUser).length ? 
                isLoggedIn() 
            
            : 
                notLoggedIn()
            }
        </div>

    )
}


export default NavBar

