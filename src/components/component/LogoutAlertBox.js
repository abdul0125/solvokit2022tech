import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Logout from './Logout';
import { Avatar} from "@mui/material";


export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const profile = JSON.parse(window.localStorage.getItem("profile"));
  console.log(profile?.picture);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Avatar
          style={{ marginRight: 10 }}
          alt={profile?.name}
          sx={{ width: 45, height: 45 }}
          src={profile?.picture}
          
          onClick={handleClickOpen}
        />
      <Dialog
      
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirm Logout"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you want to leave this site ? 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            <div style={{
                display: 'inline-block',
                position: 'relative'
            }}>
                Agree
            <Logout />
            </div>

          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}