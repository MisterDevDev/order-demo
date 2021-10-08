import React, { Component, Fragment } from 'react'
import { withRouter, Route, Switch, Redirect } from 'react-router-dom'
import Orders from './Orders';
import Carriers from './Carriers';
import Load from './Load';
import Options from './Options';

const Routes = () => {
    return(
        <div>
            <Switch>
                <Route path="/orders" component={Orders} />
                <Route path="/options" component={Options} />
                <Route path="/carriers" component={Carriers} />
                <Route path="/" component={Load} />
            </Switch>
        </div>
    )
}

export default Routes;