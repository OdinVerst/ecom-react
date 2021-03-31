import {useEffect, useState} from 'react'
import {connect} from "react-redux";

import FormInput from '../../form-input/FormInput';
import ButtonCustom from '../../button-custom/ButtonCustom';
import {Alert} from '../../alert/Alert';

import {emailSingInStart, googleSingInStart} from "../../../redux/user/userActions";
import {currentUserSingInErrorSelector} from "../../../redux/user/userSelector";
import {LoginContainerStyles} from "./Login.styles";

const Login = ({loginWithGoogle, loginWithEmail, errors}) => {
    const [user, setUser] = useState({email: '', password: ''});
    const {email, password} = user;

    const [error, setError] = useState(null);

    useEffect(() => {
        if (errors) setError(() => errors)
    }, [errors])


    const inputChangeHandler = (evt) => {
        const {name, value} = evt.target;
        setUser(() => ({...user, [name]: value}));
    }

    const submitHandler = async (evt) => {
        evt.preventDefault();
        loginWithEmail(user)
    }

    return (
        <LoginContainerStyles>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={submitHandler}>
                <FormInput label='Email' changeHandler={inputChangeHandler} type="email" name="email" value={email}
                           required/>
                <FormInput label='Password' changeHandler={inputChangeHandler} type="password" name="password"
                           value={password} required/>
                {error ? <Alert msg={errors} /> : null}
                <div className='button-group'>
                    <ButtonCustom type='submit'>Log In</ButtonCustom>
                    <ButtonCustom type='button' isGoogle onClick={loginWithGoogle}>Log In with Google</ButtonCustom>
                </div>
            </form>
        </LoginContainerStyles>
    )
}

const mapDispatchToProps = (dispatch) => ({
    loginWithGoogle: () => dispatch(googleSingInStart()),
    loginWithEmail: (props) => dispatch(emailSingInStart(props))
});

const mapStateToProps = (state) => ({
    errors: currentUserSingInErrorSelector(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
