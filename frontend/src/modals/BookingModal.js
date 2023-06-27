import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import UserBookingForm from "../components/forms/UserBookingForm";
import { appointmentsGet } from '../api/api';
import {Context} from "../index";
import { useContext } from 'react';
import { useEffect,useState } from 'react';
  

const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export default function BookingModal() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [appointments, setAppointments] = useState(['']);

  const {UserStore} = useContext(Context);

  const viewApp = async() =>{
    try {
        const res = await appointmentsGet();
        console.log("RESULT: ", res);
        setAppointments(res.data);
        UserStore.appointmentListSet(res.data);
        const status = res.status;
        if (status == 200){
          
        } else {
            alert("Nu open..")
        }
        console.log(res);
    } catch(e){
        console.error(e);
    }
  };
  return (
    <div>
<Button onClick={() => {
    handleOpen();
    viewApp();
}}>
  Open appointments
</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Your appointments:
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>

          </Typography>
           {appointments?.map((data) => (
                <UserBookingForm key={data.id} data={data}/>
            ))}
        </Box>
      </Modal>
    </div>
  );
}