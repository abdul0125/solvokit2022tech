import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import { delQuestion } from '../../api';




export default function DeleteIcon({name,quesId}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const profile = JSON.parse(window.localStorage.getItem("profile"));

  const HandelAlert = ()=>{
    handleClose();
    alert("Question is reported")}

  const handelDelete = ()=>{
    console.log(quesId);
    delQuestion(quesId);
    window.location.reload();

    
  }

  return (
    <div>
      <IconButton aria-label="settings" aria-describedby={id} variant="contained" onClick={handleClick}>
            <MoreVertIcon />
          </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }}
        >
         {name===profile?.name?<Button style={{color:'gray',borderRadius:'50'}} onClick={handelDelete}>
            Delete post
          </Button>:<Button style={{color:'gray'}} onClick={HandelAlert}>
            Report post
          </Button>}
         
        

      </Popover>
    </div>
  );
}
