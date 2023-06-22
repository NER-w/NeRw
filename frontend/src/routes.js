import {HOME_ROUTE} from './utils/const';
import {LOGIN_ROUTE} from "./utils/const";
import {REGISTER_ROUTE} from "./utils/const";
import {DOCTOR_APPLICATION_ROUTE} from "./utils/const";
import {USER_APPLICATION_ROUTE} from "./utils/const";
import {USER_DATA_ROUTE} from "./utils/const";
import {PATIENT_LIST_ROUTE} from "./utils/const";
import {USER_APPOINTMENT_ROUTE} from "./utils/const";
import {DOCTOR_APPOINTMENT_ROUTE} from "./utils/const";

import Doc from "./pages/doc";
import Login from "./pages/login";
import Registration from "./pages/registration";
import User from "./pages/user";
import  PatientList from "./pages/PatientList";
import Profile from "./pages/profile";
import  User_data from "./pages/user_data";
import  DoctorAppoint from "./pages/DoctorAppoint";
import UserAppointmenrt from "./pages/userAppointmenrt";


export const PatientRoutes =[
    {
        path: PATIENT_LIST_ROUTE,
        Component: PatientList,
    },

    {
        path: HOME_ROUTE,
        Component: Profile,
    },
    {
        path: USER_DATA_ROUTE,
        Component: User_data,
    },

    {
        path: USER_APPLICATION_ROUTE,
        Component: User,
    },
    {
        path: USER_APPOINTMENT_ROUTE,
        Component: UserAppointmenrt,
    },
];
export const DoctorRoutes = [
    {
        path: DOCTOR_APPOINTMENT_ROUTE,
        Component: DoctorAppoint,
    },
    {
        path: HOME_ROUTE,
        Component: Profile,
    },

    {
        path: DOCTOR_APPLICATION_ROUTE,
        Component: Doc,
    }
]
export const PublicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login,
    },
    {
        path: REGISTER_ROUTE,
        Component: Registration,
    },
];