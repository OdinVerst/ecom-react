import {useEffect, useState} from 'react'
import FormInput from '../../form-input/FormInput';
import {connect} from "react-redux";

import ButtonCustom from '../../button-custom/ButtonCustom';
import {Alert} from '../../alert/Alert';
import {singUpStart} from "../../../redux/user/userActions";
import {currentUserSingUpErrorSelector} from "../../../redux/user/userSelector";
import {LoginContainerStyles} from "../login/Login.styles";

const Registration = ({singIn, errors}) => {
    const [user, setUser] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState(null);
    const {displayName, email, password, confirmPassword} = user;

    useEffect(() => {
        if (errors) setError(() => errors)
    }, [errors])

    const submitHandler = async (evt) => {
        evt.preventDefault();
        if (password !== confirmPassword) {
            setError(() => 'Password not equals')
            return;
        }
        singIn({displayName, email, password});
    }

    const inputChangeHandler = (evt) => {
        const {name, value} = evt.target;
        setUser(() => ({...user, [name]: value}))
    }

    return (
        <LoginContainerStyles>
            <h2>I do not have a account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={submitHandler}>
                <FormInput label='Name' changeHandler={inputChangeHandler} type="text" name="displayName"
                           value={displayName} required/>
                <FormInput label='Email' changeHandler={inputChangeHandler} type="email" name="email" value={email}
                           required/>
                <FormInput label='Password' changeHandler={inputChangeHandler} type="password" minLength="6"
                           name="password" value={password} required/>
                <FormInput label='Confirm password' changeHandler={inputChangeHandler} type="password" minLength="6"
                           name="confirmPassword" value={confirmPassword} required/>
                {error ? <Alert msg={errors} /> : null}
                <div className='button-group'>
                    <ButtonCustom type='submit'>Sing Up</ButtonCustom>
                </div>
            </form>
        </LoginContainerStyles>
    )
}

const mapToDispatchProps = (dispatch) => ({
    singIn: (props) => dispatch(singUpStart(props))
});

const mapStateToProps = (state) => ({
    errors: currentUserSingUpErrorSelector(state)
});

export default connect(mapStateToProps, mapToDispatchProps)(Registration);
