import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import App from './App';
import APODDetails from './APODDetails';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact/>
            <Route path="/apodgallery" component={App} exact/>
            <Route path="/apoddetails/:id" component={APODDetails}/>
        </Switch>
    </BrowserRouter>
);

export default Router;