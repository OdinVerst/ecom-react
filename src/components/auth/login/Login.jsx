import React, { Component } from 'react'

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
                    <label>
                        <span>Email</span>
                        <input onChange={this.inputChangeHandler} type="email" name="email" value={email}/>
                    </label>
                    <label>
                        <span>Password</span>
                        <input onChange={this.inputChangeHandler} type="password" name="password" value={password}/>
                    </label>
                    <button type="submit">Log In</button>
                </form>
            </div>
        )
    }
}

export default Login;
