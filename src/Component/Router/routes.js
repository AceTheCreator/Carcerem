import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Landing from '../beforeAuth/landingPage/landing';
import Dashboard from '../afterAuth/dashboard/dashboard';
import Cases from '../afterAuth/dashboard/cases';
import Case from '../afterAuth/dashboard/case.js';
import CreateCase from '../afterAuth/dashboard/createCase.js'

const router = () => {
    return(
       <Switch>
        <Route path='/' exact component={Landing} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path = '/cases' component={Cases} />
        <Route path='/case/:id' component={Case} />
        <Route path='/create-case' component={CreateCase} />
        </Switch>
    )
}

export default router;

