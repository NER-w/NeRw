import  React from 'react';
import {useContext} from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';
import {PatientRoutes, PublicRoutes,DoctorRoutes} from "./routes";
import {Context} from "./index";
import User from "./pages/user";
import { observer } from 'mobx-react-lite';

const AppRouter =  () => {
    const {UserStore} = useContext(Context);
    console.log("USER" + UserStore.isUser);
    let userState = UserStore.isAuth;
    return (
        <Routes>
            {
                UserStore.isUser && PatientRoutes.map(({ path, Component})=>(
                    <Route key={path} path={path} element={<Component/>}/>
                ))
            }
            { 
            
                UserStore.isDoc && DoctorRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>}/>
            )
            }
            {
                !UserStore.isAuth && PublicRoutes.map(({ path, Component})=>(
                    <Route key={path} path={path} element={<Component/>}/>
                ))
            }

        </Routes>

    );
};

export default observer(AppRouter); 