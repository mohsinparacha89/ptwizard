import React, { Component } from 'react'

import Contact from './contact';
import Salary from './salary';
import { Switch, Route, Prompt, Redirect, matchPath } from "react-router-dom";
export default class LifeSituation extends Component {
    render() {
        return (
            <div className="row">
                <div className="col">
                    <Switch>
                        <Redirect from="/pensioncheck/lifesituation" exact to="/pensioncheck/lifesituation/contact" />
                        <Route path="/pensioncheck/lifesituation/contact" component={Contact} />
                        <Route path="/pensioncheck/lifesituation/salary" component={Salary} />
                    </Switch>
                </div>

            </div>
        )
    }
}
