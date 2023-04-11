import * as React from 'react';
import {useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Input } from '@mui/material';

import { updateProfile } from '../../api';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function AlertDialogSlide({user}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleUpdate = async() => {
    // console.log(update)
     const updatedUser = await updateProfile(user.id,{type:"user",data:{mobile:mobile,college:college}})
    setOpen(false);
    console.log(updatedUser)
  };

  const profile = JSON.parse(window.localStorage.getItem("profile"));
  
  console.log(user)
 

  const [mobile,setMobile]=useState()
  const [college,setCollege]=useState()

  React.useEffect(()=>{
    setCollege(user.college)
    setMobile(user.mobile)
  },[open])


  return (
    <div>
      <AccountBoxIcon style={{ marginRight: 18,marginTop:5 }} onClick={handleClickOpen} />
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Account Profile"}</DialogTitle>
        <DialogContent>
            <img
            src={profile?.picture}
            //Edited before deployment
            alt={profile?.name?profile.name:"S"}
            
            />
          <DialogContentText id="alert-dialog-slide-description">
            
          
          <form>
            <div style={{display:'flex',alignItems:'center',fontWeight:600,margin:20}}>
                Name   - {profile?.name}
            </div>
            <div style={{display:'flex',alignItems:'center',fontWeight:600,margin:20}}>
                Email   - {profile?.email}
            </div>
            <div style={{display:'flex',alignItems:'center',fontWeight:600,margin:20}}>
               <>College Name</>  <Input style={{marginLeft:30}} defaultValue={college?college:""}  value={college} onChange={(e)=>setCollege(e.target.value)}/>
            </div>
            <div style={{display:'flex',alignItems:'center',fontWeight:600,margin:20}}>
               <>Mobile Number</>  <Input style={{marginLeft:20}} defaultValue={mobile?mobile:""} value={mobile} onChange={(e)=>setMobile(e.target.value)} />
            </div>
          </form>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleUpdate}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
