import React, {useState, useContext} from 'react';
import './SignUp.css';
import {patientRegister, doctorRegister} from "../../api/api";
import doc from "../../pages/doc";
import { useNavigate } from 'react-router-dom';
import {Context} from '../../index.js';

const SignUp = () => {
    const navigate = useNavigate();

    const {UserStore} = useContext(Context);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFistname] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [lastname, setLastname] = useState('');
    const [doctorState, setDoctorState] = useState(false);
    const [patientState, setPatientState] = useState(false);
    
    const PatientDTO = {
        name: firstname,
        lastname: lastname,
        hashedPassword: password,
        email: username
    }
    const doctorDTO = {
        name: firstname,
        lastname: lastname,
        hashedPassword: password,
        email: username
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setUsername('');    
    //     setPassword('');
    //     setErrorMessage('');
    //     setFistname('');
    //     setLastname('');
    //     console.log("I am handleSubmit");
    // };

    const handleSubmitTwo = async () => {
        console.log("I am handleSubmitTwo");
        if (doctorState){
          try {
            const res = await doctorRegister(doctorDTO);
            if (res == undefined) alert("PARAGRAPH");

            const status = res.status;
            if (status === 200){
              navigate('/home');
              UserStore.setDoc(true);
            } else if (status === 401){
              alert('Im not the one who is wrong... What is wrong is the world.');
            }
          } catch (error) {
            console.error(error);
          }
        } else if (patientState){
          try {
            const res = await patientRegister(PatientDTO);
            if (res == undefined) alert("PARAGRAPH");
            const status = res.status;
            console.log("PAT: " + status);
            if(status === 200){
              navigate('/home');
              UserStore.setUser(true);
            } else if(status === 401){
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
            <h3 id="SignInHandler">Sign Up </h3>
            <form>
                <input
                    type="firstname"
                    name="firstname"
                    placeholder="I'm not a paragraph, I'm a <b>placeholder!</b>"
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
                <input type="radio" onClick={(e) => {setPatientState(true)} } id="user" name="role" value="user"/>
                <label id="SignUpHandler" >Patient</label>
                <input type="radio" id="doctor"  onClick={(e) => {setDoctorState(true)} } name="role" value="doctor" />
                <label id="SignUpHandler" htmlFor="doctor" >Doctor</label>

                <div>
                    <p id="SignUpHandler">Already have an account? <a href="/login">Login Now!</a></p>
                </div>

            </form>
            <button onClick={() => {handleSubmitTwo(); console.log("SUBMIT");}} type="submit" value="Register">
                Register
            </button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
};

export default SignUp;