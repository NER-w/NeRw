import React, {useState, useContext} from 'react';
import './SignUp.css';
import {patientRegister, doctorLogin, doctorRegister, uLogin} from "../../api/api";
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
    const handleSubmitTwo = async () => {
      if (doctorState) {
          try {
              console.log(doctorDTO);
              const res = await doctorRegister(doctorDTO);
              const status = res.status;
              if (status === 200) {
                  navigate('/apppointment-doc');
                  UserStore.setDoc(true);
              } else if (status === 401 || status === undefined) {
                  alert('Oops, something went wrong');
              }
          } catch (error) {
              console.error(error);
          }
      } else if (patientState) {
          try {

              const res = await patientRegister(PatientDTO);
              const status = res.status;
              if (status === 200) {
                  navigate('/user-data');
                  UserStore.setUser(true);
              } else if (status === 401 || status === undefined) {
                  alert('Oops, something went wrong');
              }
          } catch (error) {
              console.error(error);
          }
      } else {
          console.log("Oops, something went wrong!");
      }
  };
  
    return (
        <div className="login-form">
            <h3 id="SignInHandler">Sign Up </h3>
            <form>
                <input
                    type="firstname"
                    name="firstname"
                    placeholder="Enter yout first name"
                    value={firstname}
                    onChange={(e) => setFistname(e.target.value)}
                    required
                />
                <input
                    type="lastname"
                    name="lastname"
                    placeholder="Enter yout last Name"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    required
                />
                <input
                    type="text"
                    name="email"
                    placeholder="Enter your email"
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