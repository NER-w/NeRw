import React from 'react';
import {useContext} from 'react';
import {Context} from "../../index";

import './style.css';


//  for push
const Navbar = () => {
    const {UserStore} = useContext(Context);
    console.log(UserStore);
    return (
        <div>
            <nav className="HeaderBar">
                {UserStore.isAuth ? (
                    <div className="root">
                        <div className="appointments">
                                <h1>ASDASD</h1>
                        </div>
                        <div className="sensordata">
                                <h2>TQWURtQWUYR</h2>
                        </div>
                        <div className="dropdown">
                            <button className="dropbtn"></button>
                            <div className="dropdown-content">
                                <a href="#" id="link">Profile</a>
                                <a href="#" id="link">Logout</a>
                                <a href="#" id="link">Help</a>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>

                    </div>
                )
                }
            </nav>
        </div>
    );
};

export default Navbar;