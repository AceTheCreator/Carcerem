import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Landing from '../beforeAuth/landingPage/landing';
import Dashboard from '../afterAuth/dashboard/dashboard';
import Cases from '../afterAuth/dashboard/cases';
import Case from '../afterAuth/dashboard/case.js';
import CreateCase from '../afterAuth/dashboard/createCase.js'
import RegistrationPage from '../beforeAuth/registration/register';
import LoginPage from '../beforeAuth/login/login';

const router = () => {
    return(
       <Switch>
        <Route path='/' exact component={Landing} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path = '/cases' component={Cases} />
        <Route path='/case/:id' component={Case} />
        <Route path='/create-case' component={CreateCase} />
        <Route path='/register' exact component={RegistrationPage} />
        <Route path='/login' exact component={LoginPage} />
        </Switch>
    )
}

export default router;

