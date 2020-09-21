import React, { Component } from 'react'
import FormInput from '../../form-input/FormInput';

import { auth, createUserDocument } from '../../../firebase/firebase.utils';
import ButtonCustom from '../../button-custom/ButtonCustom';
import { Alert } from '../../alert/Alert';

class Registr extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
            error: null
        }
    }

    inputChangeHandler = (evt) => {
        const { name, value } = evt.target;

        this.setState({[name]: value});
    }

    clearAlert(duration) {
        setTimeout(()=> {
            this.setState({
                error: null
            });
        }, duration);
    }

    submitHandler = async (evt) => {
        evt.preventDefault();
        const { displayName ,email, password, confirmPassword } = this.state;
        if(password !== confirmPassword) {
            this.setState({
                error: {
                    text: 'Password not equels',
                    style: 'error'
                }
            }, this.clearAlert(2000));
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            await createUserDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
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
        const { displayName ,email, password, confirmPassword, error } = this.state;

        return (
            <div className='sign-in'>
                <h2>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.submitHandler}>
                    <FormInput label='Name' changeHandler={this.inputChangeHandler} type="text" name="displayName" value={displayName} required />
                    <FormInput label='Email' changeHandler={this.inputChangeHandler} type="email" name="email" value={email} required />
                    <FormInput label='Password' changeHandler={this.inputChangeHandler} type="password" minLength="6" name="password" value={password} required />
                    <FormInput label='Confirm password' changeHandler={this.inputChangeHandler} type="password" minLength="6" name="confirmPassword" value={confirmPassword} required />
                    {error ? <Alert {...error} /> : null}
                    <div className='button-group'>
                        <ButtonCustom type='submit'>Sing Up</ButtonCustom>
                    </div>
                </form>
            </div>
        )
    }
}

export default Registr;
