import React, { useState, useContext } from 'react';
import './AuthForm.css';
import {doctorLogin, patientLogin} from "../../api/api";
import {useNavigate} from "react-router-dom";
import {Context} from "../../index";

const AuthForm = () => {
    const navigate = useNavigate();

    const {UserStore} = useContext(Context);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // const [errorMessage, setErrorMessage] = useState('');
    const [doctorState, setDoctorState] = useState(false);
    const [patientState, setPatientState] = useState(false);

    const PatientDTO = {
        password: password,
        email: username
    }
    const doctorDTO = {
        // name: firstname,
        // lastname: lastname,
        password: password,
        email: username
    }

    const handleSubmit = async () => {
        console.log("I am handleSubmit");
        if (doctorState){
            try {
                console.log(doctorDTO);
                const res = await doctorLogin(doctorDTO);
                const status = res.status;
                console.log("DOC: " + status);
                if (status == 200){
                    navigate('/home');
                    UserStore.setDoc(true);
                } else if (status == 401 || status == undefined){
                    alert('Im not the one who is wrong... What is wrong is the world.');
                }
            } catch (error) {
                console.error(error);
            }
        } else if (patientState){
            try {
                const status = await patientLogin(PatientDTO);
                console.log("PAT: " + status);
                if (status == 200){
                    navigate('/home');
                    UserStore.setUser(true);
                } else if (status == 401 || status == undefined){
                    alert('Those who do not understand true pain can never understand true peace.');
                }
            } catch (error) {
                console.error(error);
            }
        } else {
            console.log("Omedeto!");
        }
    };

    return (
        <div className="login-form">
            <h3 id="SignInHandler">Sign In </h3>
            <form>
                <input
                    type="text"
                    name="username"
                    placeholder="I'm not a paragraph, I'm a <b>placeholder!</b>"
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
                <input type="radio" onClick={(e) => {setPatientState(true)} } id="user" name="role" value="user"/>
                <label id="SignUpHandler" >Patient</label>
                <input type="radio" id="doctor"  onClick={(e) => {setDoctorState(true)} } name="role" value="doctor" />
                <label id="SignUpHandler" htmlFor="doctor" >Doctor</label>
                <div>
                    <p id="SignUpHandler">Don't have a paragraph? <a href="/register"> Create one!</a></p>
                </div>
            </form>
            <button onClick={() => {handleSubmit(); console.log("SUBMIT");}} type="submit" value="Register">
                Register
            </button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
};

export default AuthForm;
