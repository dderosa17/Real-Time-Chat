import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ChatView } from '../components/ChatView/ChatView';


export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact={true} path="/chatview" component={ChatView} />
            </Switch>
        </Router>
    )
}