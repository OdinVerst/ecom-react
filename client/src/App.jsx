import {lazy, useEffect, Suspense} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import {checkUserSession} from './redux/user/userActions';
import {currentUserSelector} from './redux/user/userSelector';


import Header from './components/header/Header';
import Spinner from "./components/spinner/Spinner";
import ErrorBoundary from "./components/error-boundary/error-boundary";

const HomePage = lazy(() => import('./pages/homepage/Homepage'));
const ShopPage = lazy(() => import('./pages/shop/Shoppage'));
const SingIn = lazy(() => import('./pages/singin/Singin'));
const Checkout = lazy(() => import('./pages/checkout/Checkout'));

const App = ({checkUserSession, user}) => {
    useEffect(() => checkUserSession(), []);

    return (
        <Router>
            <Header/>
            <Switch>
                <ErrorBoundary>
                    <Suspense fallback={<Spinner />}>
                        <Route exact path='/' component={HomePage}/>
                        <Route path='/shop' component={ShopPage}/>
                        <Route exact path='/checkout' component={Checkout}/>
                        <Route exact path='/singin' render={() => user ? (<Redirect to="/"/>) : (<SingIn/>)}/>
                    </Suspense>
                </ErrorBoundary>
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
