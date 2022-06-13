import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function AlertDialog(props) {
    return (
            <Dialog
                open={props.open}
                onClose={()=>props.closeDialog(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                PaperProps={{ sx: { position: "absolute", top:48+53*props.index+'px', left: '73%', m: 0 } }}
            >
                <List sx={{
                    pt: 0 }}
                >
                    <ListItem onClick={() => props.clicDelete(props.index)}>
                        <ListItemAvatar>
                            <Avatar>
                                <DeleteIcon />
                            </Avatar>
                        </ListItemAvatar>
                    </ListItem>
                    <ListItem onClick={() => props.clickFormOpen('Edit')}>
                        <ListItemAvatar>
                            <Avatar>
                                <EditIcon />
                            </Avatar>
                        </ListItemAvatar>
                    </ListItem>
                </List>
            </Dialog>
    );
}