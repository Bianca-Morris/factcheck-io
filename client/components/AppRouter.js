import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Page from './Page';
import Page2 from './Page2';

class AppRouter extends React.Component {
    render() {
        return <Switch>
            <Route exact path='/app' component={ Page } />
            <Route exact path='/app/2' component={ Page2 } />
        </Switch>
    }
}

export default AppRouter;