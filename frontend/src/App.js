import React from "react";
import {Body, Header} from "./components";
import {useContext} from 'react';
import {Context} from "./index";
import AppRouter from "./AppRouter";
import {BrowserRouter} from "react-router-dom";


const App = () => {
    const {UserStore} = useContext(Context);
    return (
        <div className="App">
            <BrowserRouter>
               <Header/>
                <AppRouter/>
            </BrowserRouter>
        </div>
    )
};
export default App;