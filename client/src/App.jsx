import {useEffect} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import {checkUserSession} from './redux/user/userActions';
import {currentUserSelector} from './redux/user/userSelector';

import {HomePage} from './pages/homepage/Homepage';
import ShopPage from './pages/shop/Shoppage';
import Header from './components/header/Header';
import SingIn from './pages/singin/Singin';
import Checkout from './pages/checkout/Checkout';

const App = ({checkUserSession, user}) => {
    useEffect(() => checkUserSession, [checkUserSession]);

    return (
        <Router>
            <Header/>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/shop' component={ShopPage}/>
                <Route exact path='/checkout' component={Checkout}/>
                <Route exact path='/singin' render={() => user ? (<Redirect to="/"/>) : (<SingIn/>)}/>
            </Switch>
        </Router>
    )
}

const mapDispatchToProps = (dispatch) => ({
    checkUserSession: () => dispatch(checkUserSession())
});

const mapStateToProps = (state) => ({
    user: currentUserSelector(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
