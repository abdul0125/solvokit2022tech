import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
// import ListItemText from '@mui/material/ListItemText';
// import ListItem from '@mui/material/ListItem';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import { Avatar } from '@mui/material';



import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import FullscreenRoundedIcon from "@mui/icons-material/FullscreenRounded";

import QuestionFeed from './QuestionFeed';
import Answers from '../Answers';
import { display } from '@mui/system';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({
    usedFor,
    questionText,
    qimage,
    date,
    community,
    name,
    dp,
    quesId,
    funcall}) 
    {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="inputOptions" onClick={handleClickOpen}>
          <FullscreenRoundedIcon style={{ color: "gray" }} />
          <div className="inputOptions_title">More</div>
        </div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        
          <div style={{ position: 'fixed',display:'flex',borderRadius:50,backgroundColor:"white",margin:20,padding:10 }}>
            <p style={{margin:10,fontWeight:600}}>Close</p>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              >
              <CloseIcon />
            </IconButton>
            </div>
            
          
        <div style={{ backgroundColor:'whitesmoke'}}>

      <div style={{ marginLeft: "10%",marginRight:"10%",marginTop:20,marginBottom:20,width:'80%' }}>
        <Card  >
      <CardHeader
      avatar={<Avatar  src={dp} />}
      
      title={name}
      subheader={`${community} ❁ ${date}`}
      />
      {qimage && (
          <CardMedia
          component="img"
          image={qimage}
          alt="Paella dish"
          />
          )}
          <CardContent>
          <Typography variant="body2" color="text.secondary">
          {questionText}
          </Typography>
          </CardContent>
        </Card>

        <Answers  quesId={quesId} funcall={funcall}/>
      </div>
        
        
          </div>
      </Dialog>
    </div>
  );
}
