import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import BookedForm from '../components/forms/BookedForm'
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
const testDataARR  = [
  {id: 1,
    date: '13-06-202',
    time: '14:00',
    doctor: 'Jurij Rizsskij'
  },
  {
    id: 2,
    date: '14-06-202',
    time: '14:00',
    doctor: 'Jurij Rizsskij'
  }
];

export default function ViewModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Appointment na pochinku ebala
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>

          </Typography>
          {testDataARR.map((data) => (
              <BookedForm key={data.id} data={data}/>
          ))}
        </Box>
      </Modal>
    </div>
  );
}