import React, { Component } from 'react'
import {connect} from "react-redux";

import FormInput from '../../form-input/FormInput';
import ButtonCustom from '../../button-custom/ButtonCustom';
import { Alert } from '../../alert/Alert';

import {emailSingInStart, googleSingInStart} from "../../../redux/user/userActions";

import './Login.scss';


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            error: null
        }
    }

    clearAlert(duration) {
        setTimeout(()=> {
            this.setState({
                error: null
            });
        }, duration);
    }

    inputChangeHandler = (evt) => {
        const { name, value } = evt.target;
        this.setState({[name]: value});
    }

    submitHandler = async (evt) => {
        evt.preventDefault();

        const { email, password } = this.state;
        const { loginWithEmail } = this.props;
        loginWithEmail({email, password})
    }

    render() {
        const { email, password, error } = this.state;
        const { loginWithGoogle } = this.props;

        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.submitHandler}>
                    <FormInput label='Email' changeHandler={this.inputChangeHandler} type="email" name="email" value={email} required />
                    <FormInput label='Password' changeHandler={this.inputChangeHandler} type="password" name="password" value={password} required />
                    {error ? <Alert {...error} /> : null}
                    <div className='button-group'>
                        <ButtonCustom type='submit'>Log In</ButtonCustom>
                        <ButtonCustom type='button' isGoogle onClick={loginWithGoogle}>Log In with Google</ButtonCustom>
                    </div>
                </form>
            </div>
        )
    }
}

const mapToDispatchProps = (dispatch) => ({
    loginWithGoogle: () => dispatch(googleSingInStart()),
    loginWithEmail: (props) => dispatch(emailSingInStart(props))
});


export default connect(null, mapToDispatchProps)(Login);
