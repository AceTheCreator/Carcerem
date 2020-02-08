import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Landing from '../beforeAuth/landingPage/landing';
// import LoginPage from '../auth/loginPage';
// import Signup from '../auth/signupPage';
// import Home from '../authSuccess/home/home';


const router = () => {
    return(
       <Switch>
        <Route path='/' exact component={Landing} />
        </Switch>
    )
}

export default router;

