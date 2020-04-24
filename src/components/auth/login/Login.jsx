import React, { Component } from 'react'
import FormInput from '../../form-input/FormInput';

import ButtonCustom from '../../button-custom/ButtonCustom';
import { signInWithGoogle } from '../../../firebase/firebase.utils';

import './Login.scss';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    inputChangeHandler = (evt) => {
        const { name, value } = evt.target;

        this.setState({[name]: value});
    }

    submitHandler = (evt) => {
        evt.preventDefault();

        this.setState({
            email: '',
            password: ''
        })
    }

    render() {
        const { email, password } = this.state;

        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.submitHandler}>
                    <FormInput label='Email' changeHandler={this.inputChangeHandler} type="email" name="email" value={email} required />
                    <FormInput label='Password' changeHandler={this.inputChangeHandler} type="password" name="password" value={password} required />
                    <ButtonCustom type="submit">Log In</ButtonCustom>
                    <ButtonCustom onClick={signInWithGoogle}>Log In with Google</ButtonCustom>
                </form>
            </div>
        )
    }
}

export default Login;
