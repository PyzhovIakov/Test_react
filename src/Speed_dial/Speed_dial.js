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

    function handleClose1(){
        props.clickOpen1()
        setOpen(false)
    }
    function handleClose11(){
        props.clickOpen11()
        setOpen(false)
    }
    function handleClose2(){
        props.clickClose()
        setOpen(false)
    }
    function handleClose(){
        setOpen(false)
    }
    return (
        <Box sx={{ height: 70, transform: 'translateZ(0px)', flexGrow: 1 }}>
            <SpeedDial
                ariaLabel="SpeedDial controlled open example"
                sx={{ position: 'absolute', bottom: 20, right: 20 }}
                icon={<SpeedDialIcon />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
            >
                {actions.map((action) =>{
                    if (action.name==='Delete'){
                        return (
                            <SpeedDialAction
                                key={action.name}
                                icon={action.icon}
                                tooltipTitle={action.name}
                                onClick={handleClose2}
                            />
                        )
                    }
                    if (action.name==='Edit'){
                        return (
                            <SpeedDialAction
                                key={action.name}
                                icon={action.icon}
                                tooltipTitle={action.name}
                                onClick={handleClose1}
                            />
                        )
                    }
                    if (action.name==='Create'){
                        return (
                            <SpeedDialAction
                                key={action.name}
                                icon={action.icon}
                                tooltipTitle={action.name}
                                onClick={handleClose11}
                            />
                        )
                    }
                    return 0;

                   })};
            </SpeedDial>
        </Box>
    );
}
