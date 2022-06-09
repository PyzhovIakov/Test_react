import * as React from 'react';
import Box from '@mui/material/Box';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Fab from '@mui/material/Fab';
export default function ControlledOpenSpeedDial(props) {
    return (
        <Box sx={{ position: 'fixed',top: 350, right: 20, transform: 'translateZ(0px)', flexGrow: 1 }}>
            <Fab
                color="secondary"
                aria-label="Create"
                onClick={()=>props.clickOpen('Create')}
            >
                <AddCircleOutlineIcon />
            </Fab>
        </Box>
    );
}
