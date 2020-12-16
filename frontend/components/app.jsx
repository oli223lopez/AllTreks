import React from 'react';
import {Route} from 'react-router-dom'
import GreetingContainer from './Greetings/greeting_container';
import SignupFormContainer from './SessionForm/signup_form_container'
import LoginFormContainer from './SessionForm/login_form_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Link } from 'react-router-dom'
import Splash from './Splash/splash'
import NationalParkShowContainer from './NationalPark/nationalPark_show_container'
import HikeIndexItemContainer from './Hike/hike_index_item_container'


const App = () => (
    <div>
        <h1 className="splashHeader"> 
            <Link to="/" className="AllTreks">AllTreks</Link>
        </h1>

        <GreetingContainer />
       
        <Route exact path="/" component={Splash}/>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <ProtectedRoute exact path="/national_park/:nationalParkName" component={NationalParkShowContainer} />
        <ProtectedRoute exact path="/hike/:hikeName" component={HikeIndexItemContainer}/>
        
    </div>
)


export default App