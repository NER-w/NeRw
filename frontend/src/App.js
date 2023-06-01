import React from "react";
import {Body, Header} from "./components";
import {useContext} from 'react';
import {Context} from "./index";
import Navbar from "./components/header/navbar";


const App = () => {
    const {UserStore} = useContext(Context);
    console.log(UserStore);
    return (
        <div className="App">
                <Navbar/>
        </div>
    )
};
export default App;