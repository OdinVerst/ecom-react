import React from 'react';
import Login from '../../components/auth/login/Login';
import Registr from '../../components/auth/registr/Registr';

import { SinginWrapper } from './Singin.style';

const Singin = () => {
    return (
        <div className="login-page">
            <h1>Singin</h1>
            <SinginWrapper>
                <Login />
                <Registr />
            </SinginWrapper>
        </div>
    );
};

export default Singin;
