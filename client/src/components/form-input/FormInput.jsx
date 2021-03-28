import React from 'react';

import './FormInput.scss';

const FormInput = ({ changeHandler ,label, ...otherProps }) => {
    return (
        <label className="group">
            <input className="form-input" onChange={changeHandler} {...otherProps} />
            {label ? <span className={`${otherProps.value.length ? 'shrink': ''} form-input-label`}>{label}</span> : null}
        </label>
    )
}

export default FormInput;
