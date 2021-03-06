import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { TextFieldsOutlined } from '@mui/icons-material';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({open, handleClose, booking, date}) => {

    const {name, time} = booking;
    const {user} = useAuth();

    const handleBookSend = e => {
        alert ('submitted');
        handleClose();
        e.preventDefault();
    }
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={open}>
            <Box sx={style}>
                <Typography id="transition-modal-title" variant="h6" component="h2">
                {name}
                </Typography>
                <form onSubmit={handleBookSend}>
                    <TextField
                        disabled
                        sx = {{width: '90%', m: 1}}
                        id="outlined-size-small"
                        defaultValue={time}
                        size='small'
                        />
                    <TextField
                        sx = {{width: '90%', m: 1}}
                        id="outlined-size-small"
                        defaultValue={user.displayName}
                        size='small'
                        />
                    <TextField
                        sx = {{width: '90%', m: 1}}
                        id="outlined-size-small"
                        defaultValue={user.email}
                        size='small'
                        />
                    <TextField
                        sx = {{width: '90%', m: 1}}
                        id="outlined-size-small"
                        defaultValue='Phone number'
                        size='small'
                        />
                    <TextField
                        disabled
                        sx = {{width: '90%', m: 1}}
                        id="outlined-size-small"
                        defaultValue={date.toDateString()}
                        size='small'
                        />
                    <Button type="submit" variant="contained" sx={{mt:2}} style={{backgroundColor: '#14DDCF'}}>SEND</Button>
                </form>
            </Box>
            </Fade>
        </Modal>
    );
};

export default BookingModal;