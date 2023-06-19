import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import "./Button_.css"
const Button_ = () => {
    return (
        <div className={"Button-root"}>
            <ButtonGroup  size= "large" variant="contained" aria-label="outlined primary button group">
                <Button   size= "large">VIEW</Button>
                <Button  size= "large">CREATE</Button>
            </ButtonGroup>
        </div>
    );
};

export default Button_;