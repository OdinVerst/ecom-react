import React from 'react'
import { connect } from 'react-redux';

import { directorSelector } from '../../redux/directory/directorySelector';
import MenuItem from '../menu-item/MenuItem';

import './Directory.scss';

const Directory = ({sections}) => {
    return (
        <div className="directory-menu">
            {sections.map(({ id, ...otherProps}) => 
                <MenuItem key={id} {...otherProps} />
            )}
        </div>
    ); 
};

const mapStateToProps = state => ({
    sections: directorSelector(state)
});

export default connect(mapStateToProps)(Directory);

