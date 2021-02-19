import React from 'react';
import {Route, Switch } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Link } from 'react-router-dom'
import SplashContainer from './Splash/splash_container'
import LoginFormContainer from './SessionForm/login_form_container'
import SignupFormContainer from './SessionForm/signup_form_container'
// import EditReviewContainer from './Review/edit_review_form_container'
import NavBarContainer from './NavBar/navbar_container'
import NationalParkContainer from './NationalPark/national_park_container'
import HikeShowContainer from './Hike/hike_show_container'
import ProfileContainer from './Profile/profile_container'


const App = () => (
    <div>
        
            <NavBarContainer />

            <Switch>
                <Route exact path="/" component={SplashContainer}/>
                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <AuthRoute exact path="/signup" component={SignupFormContainer} />
                <ProtectedRoute exact path='/national_park/:id' component={NationalParkContainer} />
                <ProtectedRoute exact path='/hike/:id' component={HikeShowContainer} />
                <ProtectedRoute exact path='/profile/:username' component={ProfileContainer}/>
            </Switch>


    </div>
)


export default App