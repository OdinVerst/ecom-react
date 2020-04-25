import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import { HomePage } from './pages/homepage/Homepage';
import ShopPage from './pages/shop/Shoppage';
import Header from './components/header/Header';
import Singin from './pages/singin/Singin';
import { auth, createUserDocument } from './firebase/firebase.utils';

class App extends Component {
    constructor() {
        super();

        this.state = {
            user: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
            this.setState({ user: user });
            const userRef = createUserDocument(user);
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
        <Router>
            <Header login={this.state.user} />
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
