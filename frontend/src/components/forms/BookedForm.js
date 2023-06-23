// import React from 'react';
// import Box from '@mui/material/Box';

// const BookedForm = (props) => {
//     const {dateTime, Duration, doctor_id} = props.data;
//     return (
//         <div>
//             <Box sx={{ border: '1px solid', marginBottom: '3px', fontFamily: 'arial' }}>
//                 date: {dateTime}  duration: {Duration} doctor: {doctor_id}
//             </Box>
//         </div>
//     );
// };

// export default BookedForm;


import React from 'react';
import Box from '@mui/material/Box';

const BookedForm = (props) => {
  const { dateTime, Duration, doctor_id,id } = props.data;

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
    </Box>
  );
};

export default BookedForm;
