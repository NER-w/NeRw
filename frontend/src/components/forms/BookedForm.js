import React from 'react';
import Box from '@mui/material/Box';

const BookedForm = (props) => {
    const {date, time, doctor} = props.data;
    return (
        <div>
            <Box sx={{ border: '1px solid', marginBottom: '3px', fontFamily: 'arial' }}>
                {date} {time} {doctor}
            </Box>
        </div>
    );
};

export default BookedForm;
