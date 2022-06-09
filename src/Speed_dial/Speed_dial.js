import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const actions = [
    { icon: <AddCircleOutlineIcon />, name: 'Create' },
    { icon: <EditIcon />, name: 'Edit' },
    { icon: <DeleteIcon />, name: 'Delete' },
];

export default function ControlledOpenSpeedDial(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);

    function handleClose1(event,EV){
        props.clickOpen(EV)
        setOpen(false)
    }
    function handleClose(){
        setOpen(false)
    }
    return (
        <Box sx={{ position: 'fixed',top: 420, right: 20,height: 70, transform: 'translateZ(0px)', flexGrow: 1 }}>
            <SpeedDial
                ariaLabel="SpeedDial controlled open example"
                sx={{ position: 'absolute', bottom: 20, right: 20 }}
                icon={<SpeedDialIcon />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
            >
                {actions.map((action) =>{
                    return (
                            <SpeedDialAction
                                key={action.name}
                                icon={action.icon}
                                tooltipTitle={action.name}
                                onClick={(e)=>handleClose1(e,action.name)}
                            />
                        )
                   })};
            </SpeedDial>
        </Box>
    );
}
