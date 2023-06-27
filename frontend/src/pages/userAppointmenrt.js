import React from 'react';
import {BookedForm} from "../components/forms/UserBookingForm";
import BookingModal from "../modals/BookingModal";
import "./pages.css";

const UserAppointmenrt = () => {

    return (
        <div>
            <p className='otstup'/>
            <div className='red-div-user'>
                <BookingModal className="red-div" id="modal"/>
            </div>
        </div>
    );
};

export default UserAppointmenrt;