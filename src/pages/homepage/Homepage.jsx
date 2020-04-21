import React from 'react';

import Directory from '../../components/directory/Directory';

import './Homepage.scss';

export const HomePage = () => {
    return (
        <div className="homepage">
            <h1>Welcome to homepage</h1>
            <Directory /> 
        </div>
    )
}
