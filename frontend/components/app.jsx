import React from 'react';
import {Route} from 'react-router-dom'
import GreetingContainer from './Greetings/greeting_container';
import SignupFormContainer from './SessionForm/signup_form_container'
import LoginFormContainer from './SessionForm/login_form_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <h1> Welcome to AllTreks</h1>
        <Route exact path="/" component={GreetingContainer}/>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </div>
)


export default App