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

            <div>

            <p className="welcomeMsg"> Welcome back  
            </p>
                <Link to={`profile/${props.currentUser.username}`} className="welcomeMsg"> 
                {props.currentUser.username} 
                </Link>
                
            </div>

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
                <div className=''>
                    <Link to="/">
                        <img src={window.alltreks_logo} width='40px' height='40px' />
                    </Link>
                    <Link to="/" className="AllTreks">
                        AllTreks</Link>
                </div>
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

