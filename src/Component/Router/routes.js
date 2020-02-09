import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Landing from '../beforeAuth/landingPage/landing';
<<<<<<< HEAD
import Dashboard from '../afterAuth/dashboard/dashboard';
import Cases from '../afterAuth/dashboard/cases';
import Case from '../afterAuth/dashboard/case.js';
import CreateCase from '../afterAuth/dashboard/createCase.js'
=======
import RegistrationPage from '../beforeAuth/registration/register';
import LoginPage from '../beforeAuth/login/login';

>>>>>>> 877a4b422472ce08b56be7799b65afb2900b40a0

const router = () => {
    return(
       <Switch>
        <Route path='/' exact component={Landing} />
<<<<<<< HEAD
        <Route path='/dashboard' component={Dashboard} />
        <Route path = '/cases' component={Cases} />
        <Route path='/case/:id' component={Case} />
        <Route path='/create-case' component={CreateCase} />
=======
        <Route path='/register' exact component={RegistrationPage} />
        <Route path='/login' exact component={LoginPage} />
>>>>>>> 877a4b422472ce08b56be7799b65afb2900b40a0
        </Switch>
    )
}

export default router;

