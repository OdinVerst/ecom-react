import React from 'react'
import {connect} from 'react-redux';

import MenuItem from '../menu-item/MenuItem';
import {directorSelector} from '../../redux/directory/directorySelector';

import {DirectoryStyle} from "./Directory.styles";

const Directory = ({sections}) => (
    <DirectoryStyle>
        {sections.map(({id, ...otherProps}) =>
            <MenuItem key={id} {...otherProps} />
        )}
    </DirectoryStyle>
);

const mapStateToProps = state => ({
    sections: directorSelector(state)
});

export default connect(mapStateToProps)(Directory);

