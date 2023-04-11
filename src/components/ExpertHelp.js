import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import './ExpertHelp.css'

import { askHelp } from '../api';

export default function ExpertHelp({Icon, title,user}) {
  const [open, setOpen] = React.useState(false);
  const profile = JSON.parse(window.localStorage.getItem("profile"));
  const [help, setHelp] = React.useState({
    studentID:'',
    email:'',
    mobile:'',
    problem: '',
    topicAndExplanation: '',
    extrapoints: [],
    fileUploaded: '',

  });
  console.log(user.mobile)
  React.useEffect(()=>{
    setHelp({...help,email:profile?.email,mobile:user?.mobile})
  },[])
  let type_=''
  switch (title) {
    case 'Expert Help':
      type_ = "expert";
      break;
    case 'Assignment Help':
      type_ = "assignment";
      break;
    case 'Project Help':
      type_ = "project";
      break;
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () =>{
    handleClose();
    await  askHelp(help,type_);
    console.log('reached handle submit')
  }

  const onChange = (e) => {
    const files = e.target.files;
    const file = files[0];
    getBase64(file);
  };

  const onLoad = (fileString) => {
    console.log(fileString);
    setHelp({...help,fileUploaded:fileString});
  };

  const getBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      onLoad(reader.result);
    };
  };

  return (
    <div className='HelpBox'>
      <div className="SidebarOption" onClick={handleClickOpen}>
      <Icon />

      <h3>{title}</h3>
    </div>
      <Dialog open={open} onClose={handleClose} >
        <DialogTitle>{title}</DialogTitle>
        {title==='Assignment Help'?(
          <>
          <DialogContent>

           <DialogContentText>
           Please upload your assignment
            </DialogContentText>
          </DialogContent>
          <div className='ExpertBottom'>
          <UploadFileIcon/>
          <h4>Upload Assignment</h4>
          <input id='inputExpertHelp' type="file" onChange={onChange} />

        </div>
        <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type='submit' onClick={handleSubmit}>Submit</Button>
          </DialogActions>
          </>
        ):(
<>
          <DialogContent>
            <DialogContentText>
              {title==='Expert Help'?'Write your problem briefly':'Explain your project briefly'}
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label={title==='Expert Help'?'Problem':'Topic and Explanation'}
              multiline
              fullWidth
              variant="standard"
              value={help.problem}
              onChange={(e)=>setHelp({...help,problem:e.target.value})}
              
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Extra points to be considered"
              
              fullWidth
              variant="standard"
              value={help.extrapoints}
              onChange={(e)=>setHelp({...help,extrapoints:e.target.value})}
            />
            <div className='ExpertBottom'>
              <UploadFileIcon/>
              <h4>UploadFile</h4>
              <input id='inputExpertHelp' type="file" onChange={onChange} />
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type='submit' onClick={handleSubmit}>Submit</Button>
          </DialogActions>
              </>
        )}
      </Dialog>
    </div>
  );
}
