import React from 'react';
import CreateModal from "../modals/CreateModal";
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
                    <CreateModal id="modal"/>
                </div>
            </div>
            <p className="otstup"></p>
            {/*<img width="100%" src="https://cdn.discordapp.com/attachments/1042060469126582316/1121462396897214585/wide_shakal.jpeg"/>*/}
            {/*<img src="https://cdn.discordapp.com/attachments/1042060469126582316/1121461809631744071/CodingBad.png"/>*/}
        </div>
    );
};

export default DoctorAppoint;