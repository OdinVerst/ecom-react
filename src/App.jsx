import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import { auth, createUserDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/userActions';

import { HomePage } from './pages/homepage/Homepage';
import ShopPage from './pages/shop/Shoppage';
import Header from './components/header/Header';
import Singin from './pages/singin/Singin';
import { currentUderSelector } from './redux/user/userSelector';

class App extends Component {
    unsubscribeFromAuth = null;

    componentDidMount() {
        const { setCurrentUser } = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
            if (user) {
                const userRef = await createUserDocument(user);
                userRef.onSnapshot(snapshot => {
                    setCurrentUser({
                        id: snapshot.id,
                        ...snapshot.data()
                    })
                });
            } else {
                setCurrentUser(user);
            }
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
        <Router>
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/shop' component={ShopPage} />
                <Route exact path='/singin' render={() => this.props.user ? (<Redirect to="/" />) : (<Singin />)} />
            </Switch>
        </Router>
        )
    }
}

const mapDispatchToProps = {
    setCurrentUser
}

const mapStateToProps = (state) => ({
    user: currentUderSelector(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
