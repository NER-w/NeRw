import React from "react";
import {Body, Header} from "./components";
import {useContext} from 'react';
import {Context} from "./index";
import AppRouter from "./AppRouter";
import {BrowserRouter} from "react-router-dom";


const App = () => {
    const {UserStore} = useContext(Context);
    // console.log(UserStore);
    return (
        <div className="App">
            <BrowserRouter>
               <Header/>
                <AppRouter/>
                {/* <h1>I've become stronger, and now I'm a first header, not paragraph!</h1> */}
            {/* <img width="100%" src="https://cdn.discordapp.com/attachments/1042060469126582316/1121462396897214585/wide_shakal.jpeg"/> */}
        
            </BrowserRouter>
        </div>
    )
};
export default App;