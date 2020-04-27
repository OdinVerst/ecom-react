import React, { Component } from 'react'
import FormInput from '../../form-input/FormInput';

import ButtonCustom from '../../button-custom/ButtonCustom';
import { auth, signInWithGoogle } from '../../../firebase/firebase.utils';

import './Login.scss';
import { Alert } from '../../alert/Alert';

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

        try {
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({
                email: '',
                password: ''
            })
        } catch (error) {
           this.setState({
                error: {
                    text: error.message,
                    style: 'error'
                }
            }, this.clearAlert(2000));
        }
    }

    render() {
        const { email, password, error } = this.state;

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
                        <ButtonCustom type='button' classStyle={'google'} onClick={signInWithGoogle}>Log In with Google</ButtonCustom>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;
