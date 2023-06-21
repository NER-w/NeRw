import React from 'react';
import {useContext} from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';
import {AuthRoutes, PublicRoutes} from "./routes";
import {Context} from "./index";
import User from "./pages/user";


const AppRouter = () => {
    const {UserStore} = useContext(Context);
    console.debug("DEBUG: " + UserStore.isAuth);
    return (
        <Routes>
            {
                UserStore.isAuth && AuthRoutes.map(({ path, Component})=>(
                    <Route key={path} path={path} element={<Component/>}/>
                ))
            }
            {
                PublicRoutes.map(({ path, Component})=>(
                    <Route key={path} path={path} element={<Component/>}/>
                ))
            }
        </Routes>


    );
};

export default AppRouter;