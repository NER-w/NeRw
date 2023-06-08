import React, {useState} from 'react';
import './SignUp.css';


const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFistname] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [lastname, setLastname] = useState('');



    const handleSubmit = (e) => {
        e.preventDefault();
        setUsername('');
        setPassword('');
        setErrorMessage('');
        setFistname(' ');
        setLastname('');
    };

    return (
        <div className="login-form">
            <h3 id="SignInHandler">Sign Up </h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="firstname"
                    name="firstname"
                    placeholder="First Name"
                    value={firstname}
                    onChange={(e) => setFistname(e.target.value)}
                    required
                />
                <input
                    type="lastname"
                    name="lastname"
                    placeholder="Last Name"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    required
                />
                <input
                    type="text"
                    name="email"
                    placeholder="email"
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
                    <p id="SignUpHandler">Already have an account? <a href="/login">Login Now!</a></p>
                </div>

                <input type="submit" value="Register"/>


            </form>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
};

export default SignUp;
