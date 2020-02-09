import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Landing from '../beforeAuth/landingPage/landing';
import RegistrationPage from '../beforeAuth/registration/register';
import LoginPage from '../beforeAuth/login/login';


const router = () => {
    return(
       <Switch>
        <Route path='/' exact component={Landing} />
        <Route path='/register' exact component={RegistrationPage} />
        <Route path='/login' exact component={LoginPage} />
        </Switch>
    )
}

export default router;

