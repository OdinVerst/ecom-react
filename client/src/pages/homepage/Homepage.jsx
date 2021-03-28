import React from 'react';

import Directory from '../../components/directory/Directory';

import { HomePageWrapper } from './Homepage.styles';

export const HomePage = () => {
    return (
        <HomePageWrapper>
            <h1>Welcome to homepage</h1>
            <Directory /> 
        </HomePageWrapper>
    )
}
