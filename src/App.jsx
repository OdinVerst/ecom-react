import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import { HomePage } from './pages/homepage/Homepage';
import ShopPage from './pages/shop/Shoppage';
import Header from './components/header/Header';
import Singin from './pages/singin/Singin';
import { auth } from './firebase/firebase.utils';

class App extends Component {
    constructor() {
        super();

        this.state = {
            userEmail: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({userEmail: user.email});
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
        <Router>
            <Header login={this.state.userEmail} />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/shop' component={ShopPage} />
                <Route exact path='/singin' component={Singin} />
            </Switch>
        </Router>
        )
    }
}

export default  App;
