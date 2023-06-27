import React from 'react';
import {Box, Button} from '@mui/material';
import { useContext } from 'react';
import {Context} from "../../index.js";
import {appointmentBook} from '../../api/api.js';

const UserBookingForm = (props) => {
  const {UserStore} = useContext(Context);
  const { dateTime, Duration, doctor_id,id } = props.data;
  const userId = UserStore.patId;
  const BookDTO = {
    user_id: userId,
    appointment_id: id 
  }
  const handleSubmitThree = async () => {
    try{
        const res = await appointmentBook(BookDTO);
        if (res.status == 200){
            alert("Congratulations! You sucsessfully registered on appointment!");
        } else {
            alert("Could not register on appointment");
        }
        return res;
    } catch(e){
        console.log(e);
    }
  }
  
  return (
    <Box
      sx={{
        border: '1px solid',
        marginBottom: '3px',
        fontFamily: 'arial',
        backgroundColor: '#f5f5f5',
        borderRadius: '5px',
        padding: '10px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      Date: {dateTime}
      Duration: {Duration}
      Doctor: {doctor_id}
      <button onClick={ handleSubmitThree}>
        Register
      </button>
    </Box>
  );
};

export default UserBookingForm;
