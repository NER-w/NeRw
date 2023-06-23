import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import BookedForm from '../components/forms/BookedForm'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {useContext, useState} from 'react'
import {Context} from "../index";
import {appointmentCreate} from "../api/api";

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

export default function CreateModal() {
    const [open, setOpen] = React.useState(false);
    const {UserStore} = useContext(Context);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [dateTime_, setDateTime] = useState('')
    const [duration_, setDuration] = useState('')

    const appDTO = {
            dateTime: dateTime_,
            duration: duration_,
            patient_id:  1,
            doctor_id: 1
    }

    const createApp = async () => {
        console.log("APP", appDTO);
        const res = await appointmentCreate(appDTO);
        const status = res.status;
        if (status === 200) {
            alert("Not paragraph!");
        } else {
            alert("Paragraph!");
        }
        console.log("RES:", res);
    }

    return (
        <div>
            <Button onClick={handleOpen}>Create paragraph</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Create paragraph
                    </Typography>

                    <Typography id="modal-modal-title" variant="h6" component="h3">
                        In format: MM-DD-YY hh:mm
                    </Typography>

                    <Typography id="modal-modal-description" sx={{mt: 2}}>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': {m: 1, width: '25ch'},
                            }}
                            noValidate
                            autoComplete="off"
                        >

                            {/* <DateTimePicker
                                    value={dateTime_}
                                    onChange={(newValue) => {
                                        setDateTime(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                    /> */}
                            <TextField onChange={(data) => setDateTime(data.target.value)} id="Enter date and time"
                                       label="Enter date and time" variant="standard"/>
                            <TextField onChange={(data) => setDuration(data.target.value)} id="Duration" label="Enter duration"
                                       variant="standard"/>
                        </Box>
                    </Typography>
                    <Button onClick={() => createApp()} variant="text">Confirm</Button>
                </Box>
            </Modal>
        </div>
    );
}
