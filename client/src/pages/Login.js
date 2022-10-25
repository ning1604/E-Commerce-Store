import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

function Login(props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const mutationResponse = await login({
                variables: { email: formState.email, password: formState.password },
            });
            const token = mutationResponse.data.login.token;
            Auth.login(token);
        } catch (e) {
            console.log(e);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <div className='main-container page-container'>
            <h2 className='sub-header'>Login</h2>
            <form className='login-form' onSubmit={handleFormSubmit}>
                <div className='form-input'>
                    <label htmlFor='email'>Email address:</label>
                    <input
                        placeholder='youremail@example.com'
                        name='email'
                        type='email'
                        id='email'
                        onChange={handleChange}
                    />
                </div>
                <div className='form-input'>
                    <label htmlFor='pwd'>Password:</label>
                    <input
                        placeholder='******'
                        name='password'
                        type='password'
                        id='pwd'
                        onChange={handleChange}
                    />
                </div>
                {error ? (
                    <div>
                        <p className='error-text'>The provided credentials are incorrect</p>
                    </div>
                ) : null}
                <div>
                    <button className='form-btn' type='submit'>Submit</button>
                </div>
                <div className='signup-link-container'>
                    <p>Not a Member?</p>
                    <Link to='/signup' className='signup-link'>Signup</Link>
                </div>
            </form>
        </div>
    );
}

export default Login;
