import React from 'react';
import Login from '../../components/auth/login/Login';
import Registr from '../../components/auth/registr/Registr';

import './Singin.scss';

const Singin = () => {
    return (
        <div className="login-page">
            <h1>Singin</h1>
            <div className="login-page__wrapper">
                <Login />
                <Registr />
            </div>
        </div>
    );
};

export default Singin;
