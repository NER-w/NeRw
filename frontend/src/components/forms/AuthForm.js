import React, { useState } from 'react';
import './AuthForm.css';

const AuthForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setUsername('');
        setPassword('');
        setErrorMessage('');
    };

    return (
        <div className="login-form">
            <h3 id="SignInHandler">Sign In </h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input  type="radio" id="user" name="role" value="user"/>
                <label id="SignUpHandler" htmlFor="user">Patient</label>
                <input type="radio" id="doctor" name="role" value="doctor"/>
                <label id="SignUpHandler" htmlFor="doctor">Doctor</label>
                <div>
                    <p id="SignUpHandler">Don't have an account?<a href="/register"> Create one!</a></p>
                </div>
                <input type="submit" value="Login" />
            </form>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
};

export default AuthForm;
