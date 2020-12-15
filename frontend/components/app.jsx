import React from 'react';
import {Route} from 'react-router-dom'
import GreetingContainer from './Greetings/greeting_container';
import SignupFormContainer from './SessionForm/signup_form_container'
import LoginFormContainer from './SessionForm/login_form_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Link } from 'react-router-dom'
import Splash from './Splash/splash'
import NationalParkShowContainer from './NationalPark/nationalPark_show_container'



const App = () => (
    <div>
        <h1 className="splashHeader"> 
            <Link to="/" className="AllTreks">AllTreks</Link>
        </h1>

        
       
        <Route exact path="/" component={Splash}/>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route exact path="/nationalPark/:nationalParkId" component={NationalParkShowContainer} />
        
    </div>
)


export default App