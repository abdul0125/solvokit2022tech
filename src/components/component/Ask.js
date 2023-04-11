import { Input } from "@mui/material";
import React,{useEffect, useState} from "react";
import UploadIcon from "@mui/icons-material/Upload";
import "./Ask.css";
import { askQuestion } from "../../api";

function Ask({ usedFor }) {

  useEffect(()=>{
    setNewQuestion({...newQuestion,studentID:profile.email,studentName:profile.name,studentImageUrl:profile.imageUrl})
  },[])

  const [newQuestion, setNewQuestion] = useState({
    studentID: "",
    studentName:"",
    studentImageUrl:"",
    questionID: "",
    subject: "",
    community: "",
    questionText: "",
    fileUploaded: "",
    answersID: [],
    answered: false,
  });
  const profile = JSON.parse(window.localStorage.getItem("profile"));
  const fullprofile = JSON.parse(window.localStorage.getItem("FullProfile"));

 

  const handleSubmit = async () =>{
    
    await  askQuestion(fullprofile[0]._id,newQuestion,usedFor);
    console.log("newest asked question",newQuestion)
    console.log('reached handle submit')
    window.location.reload();
  }

  const onChange = (e) => {
    const files = e.target.files;
    const file = files[0];
    getBase64(file);
  };

  const onLoad = (fileString) => {
    console.log(fileString);
    setNewQuestion({...newQuestion,fileUploaded:fileString});
  };

  const getBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      onLoad(reader.result);
    };
  };

  return (
    <div className="Ask">
      <Input
        style={{ padding: 10, width: "95%" }}
        disableUnderline
        placeholder={
          usedFor === "askexpert"
            ? "Post your question for Experts"
            : "Ask your question in community"
        }
        multiline
        value={newQuestion.questionText}
        onChange={(e) =>
          setNewQuestion({ ...newQuestion, questionText: e.target.value })
        }
      />
      {usedFor === "askcommunity" ? (
        <Input
          disableUnderline
          placeholder="Enter Community "
          autoComplete
          value={newQuestion.community}
          onChange={(e) =>
            setNewQuestion({ ...newQuestion, community: e.target.value })
          }
        />
      ) : (
        <Input
          disableUnderline
          placeholder="Enter Subject "
          autoComplete
          value={newQuestion.subject}
          onChange={(e) =>
            setNewQuestion({ ...newQuestion, subject: e.target.value })
          }
        />
      )}
      <div className="AskUpload">
        <UploadIcon style={{ color: "gray" }} />
        <div style={{ fontWeight: 600 }}>Upload</div>
        <input id="inputAskUpload" type="file" onChange={onChange} />
      </div>

      <div className="AskUpload" onClick={handleSubmit}>Submit</div>
    </div>
  );
}

export default Ask;













































































// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { Input } from "@mui/material";
// import {useState} from "react";
// import UploadIcon from "@mui/icons-material/Upload";
// import "./Ask.css";
// import { askQuestion } from "../../api";



// export default function Ask({ usedFor }) {

//   const [newQuestion, setNewQuestion] = useState({
//     studentID: "abdulahad0125@gmail.com",
//     questionID: "ascknac",
//     subject: "",
//     community: "",
//     questionText: "",
//     fileUploaded: "",
//     answersID: [],
//     answered: false,
//   });
 

//   const handleSubmit = async () =>{
//     await  askQuestion(newQuestion,usedFor);
//     console.log('reached handle submit')
//   }

//   const onChange = (e) => {
//     const files = e.target.files;
//     const file = files[0];
//     getBase64(file);
//   };

//   const onLoad = (fileString) => {
//     console.log(fileString);
//     setNewQuestion({...newQuestion,fileUploaded:fileString});
//   };

//   const getBase64 = (file) => {
//     let reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => {
//       onLoad(reader.result);
//     };
//   };
//   return (
//     <Card sx={{ minWidth: 850 }} className='card'>
      
//       <div className="Ask">
//       <Input
//         style={{ padding: 10, width: "95%" }}
//         disableUnderline
//         placeholder={
//           usedFor === "askexpert"
//             ? "Post your question for Experts"
//             : "Ask your question in community"
//         }
//         multiline
//         value={newQuestion.questionText}
//         onChange={(e) =>
//           setNewQuestion({ ...newQuestion, questionText: e.target.value })
//         }
//       />
//       {usedFor === "askcommunity" ? (
//         <Input
//           disableUnderline
//           placeholder="Enter Community "
//           autoComplete
//           value={newQuestion.community}
//           onChange={(e) =>
//             setNewQuestion({ ...newQuestion, community: e.target.value })
//           }
//         />
//       ) : (
//         <Input
//           disableUnderline
//           placeholder="Enter Subject "
//           autoComplete
//           value={newQuestion.subject}
//           onChange={(e) =>
//             setNewQuestion({ ...newQuestion, subject: e.target.value })
//           }
//         />
//       )}
//       <div className="AskUpload">
//         <UploadIcon style={{ color: "gray" }} />
//         <div style={{ fontWeight: 600 }}>Upload</div>
//         <input type="file" onChange={onChange} />
//       </div>

//       <div className="AskUpload" onClick={handleSubmit}>Submit</div>
//     </div>
        
      
//       <CardActions>
        
//       </CardActions>
//     </Card>
//   );
// }












































