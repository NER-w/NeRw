import React from 'react';
import CreateModal from "../modals/CreateModal";
import ViewModal from "../modals/ViewModal";
import "./pages.css";


const DoctorAppoint = () => {
    return (
        <div>
            <p className    ="otstup"/>
            <div className="align-appointments">
                <div className="red-div">
                    <CreateModal className="red-div" id="modal"/>
                </div>
                <div className="blue-div">
                    <ViewModal id="modal"/>
                </div>
            </div>
            <p className="otstup"></p>
        </div>
    );
};

export default DoctorAppoint;