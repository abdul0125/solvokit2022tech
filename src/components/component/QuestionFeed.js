import * as React from "react";
import { useState,useEffect } from "react";

import moment from "moment";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import RateReviewIcon from "@mui/icons-material/RateReview";

import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";

import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import FullscreenRoundedIcon from "@mui/icons-material/FullscreenRounded";

import Answers from "../Answers";
import WriteAnswer from "./WriteAnswer";
import "./QuestionFeed.css";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button } from "@mui/material";

import FullScreenDialog from "./MoreScreen";
import DeleteIcon from "./DeleteIcon";


import { updateProfile,getFullProfile } from "../../api"; 



export default function QuestionFeed({
  usedFor,
  questionText,
  qimage,
  date,
  community,
  name,
  dp,
  quesId,
  bookmarked
}) {
  // const profile = JSON.parse(window.localStorage.getItem("profile"));
  const [answerSection, setAnswerSection] = useState(false);
  const [giveanswer, setGiveAnswer] = useState(false);
  const [bookmarkButtonState,setBookmarkButtonState]=useState(bookmarked);
  console.log("bookmarked",bookmarked);
  // const [userFullProfile,setUserFullProfile]=useState([]);

  // const getProfileData = async()=>{
  //   const userCurrentData = await getFullProfile(profile.googleId);
  //   console.log(userCurrentData);
  //   setUserFullProfile(userCurrentData);
  //   console.log(userFullProfile); 
  // }

  // useEffect(()=>{
  //   getProfileData();
  // },[])

  const fullprofile = JSON.parse(window.localStorage.getItem("FullProfile"));
  // const dateOptions = {
  //   weekday: "long",
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  // };

  const handleUpdates = async ()=>{
    setBookmarkButtonState(!bookmarkButtonState);
    console.log(fullprofile[0]._id);

    const updatedprofile = await updateProfile(fullprofile[0]._id,{type:"bookmark",quesId:quesId});
    console.log("uiui",updatedprofile?.data);
    


  }

  const handelAnswers = () => {
    if (giveanswer) {
      setGiveAnswer(false);
    }
    setAnswerSection(!answerSection);
  };
  const handelGiveAnswers = () => {
    if (answerSection) {
      setAnswerSection(false);
    }
    setGiveAnswer(!giveanswer);
  };

  return (
    <Card sx={{ maxWidth: 850 }} style={{ margin: 10 }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: red[500] }} src={dp} />}
        action={
          // <IconButton aria-label="settings">
          //   <MoreVertIcon />
          // </IconButton>
        <DeleteIcon name={name} quesId={quesId} type="submit"/>
        }
        title={name}
        subheader={`${community} ❁ ${moment(date).fromNow()}`}
      />
      {qimage && (
        <CardMedia
          component="img"
          height="194"
          image={qimage}
          alt="Paella dish"
        />
      )}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {questionText}
        </Typography>
      </CardContent>
      <CardActions style={{ justifyContent: "space-around" }}>

        <FullScreenDialog
        usedFor={usedFor}
        questionText={questionText}
        qimage={qimage}
        date={date}
        community={community}
        name={name}
        dp={dp}
        quesId={quesId} 
        funcall={answerSection} />

        <div className="inputOptions" onClick={handelAnswers}>
          <QuestionAnswerIcon style={{ color: "gray" }} />
          <div className="inputOptions_title">Answers</div>
        </div>
        <div className="inputOptions" onClick={handelGiveAnswers}>
          <RateReviewIcon style={{ color: "gray" }} />
          <div className="inputOptions_title">Write Answer</div>
        </div>
        {bookmarkButtonState? (
          <div className="inputOptions" onClick={handleUpdates}>
            <BookmarkRemoveIcon style={{ color: "gray" }} />
            <div className="inputOptions_title">Remove bookmark</div>
          </div>
        ) : (
          <div className="inputOptions" onClick={handleUpdates}>
            <BookmarkAddIcon style={{ color: "gray" }} />
            <div className="inputOptions_title">Add bookmark</div>
          </div>
        )}
      </CardActions>
      {answerSection && (
        <div className="Answers">
          <Answers quesId={quesId} funcall={answerSection} />
        </div>
      )}
      {giveanswer && (
        <div className="GiveAnswers">
          <WriteAnswer quesId={quesId} />
        </div>
      )}
    </Card>
  );
}

// import React, { useState } from "react";
// import { Avatar, Button, IconButton } from "@mui/material";
// import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
// import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
// import FullscreenRoundedIcon from "@mui/icons-material/FullscreenRounded";
// import RateReviewIcon from "@mui/icons-material/RateReview";
// import "./QuestionFeed.css";
// import Answers from "../Answers";
// import WriteAnswer from "./WriteAnswer";

// const QuestionFeed = ({ usedFor }) => {
//   const [answerSection, setAnswerSection] = useState(false);
//   const [giveanswer, setGiveAnswer] = useState(false);

//   const handelAnswers = () => {
//     if(giveanswer){
//       setGiveAnswer(false);
//     }
//     setAnswerSection(!answerSection);
//   };
//   const handelGiveAnswers = () => {
//     if (answerSection){
//       setAnswerSection(false);
//     }
//     setGiveAnswer(!giveanswer);
//   };
//   return (
//     <>
//       <div className="QuestionFeed">
//         <div className="QFHead">
//           <Avatar
//             style={{ margin: 10 }}
//             alt="Remy Sharp"
//             src="/static/images/avatar/1.jpg"
//             sx={{ width: 48, height: 48 }}
//           />
//           <div className="NameAndCollege">
//             <h4 style={{ margin: 0 }}> Abdul Ahad </h4>
//             <p style={{ margin: 0 }}>Aligarh muslim university</p>
//           </div>

//           <MoreVertIcon />
//         </div>
//         <div className="QFbody">
//           <div>
//             <img
//               style={{ width: "100%" }}
//               src={
//                 "https://d2vlcm61l7u1fs.cloudfront.net/media%2F0d5%2F0d5a1df8-b918-4426-9152-53cabc159c07%2Fphp5FKiwd.png"
//               }
//               alt="boohoo"
//               className="img-responsive"
//             />
//           </div>
//           <p>will this app work properly or not ?</p>
//         </div>
//         <div className="QFTail">
//           <div className="inputOptions">
//             <FullscreenRoundedIcon style={{ color: "gray" }} />
//             <div className="inputOptions_title">More</div>
//           </div>

//           <div className="inputOptions" onClick={handelAnswers}>
//             <QuestionAnswerIcon style={{ color: "gray" }} />
//             <div className="inputOptions_title">Answers</div>
//           </div>
//           <div className="inputOptions" onClick={handelGiveAnswers}>
//             <RateReviewIcon style={{ color: "gray" }} />
//             <div className="inputOptions_title">Write Answer</div>
//           </div>
//           {usedFor === "bookmarks" ? (
//             <div className="inputOptions">
//               <BookmarkRemoveIcon style={{ color: "gray" }} />
//               <div className="inputOptions_title">Remove bookmark</div>
//             </div>
//           ) : (
//             <div className="inputOptions">
//               <BookmarkAddIcon style={{ color: "gray" }} />
//               <div className="inputOptions_title">Add bookmark</div>
//             </div>
//           )}
//         </div>
//       </div>
//       {answerSection && (
//         <div className="Answers">
//           <Answers />
//         </div>
//       )}
//       {giveanswer && (
//         <div className="GiveAnswers">
//           <WriteAnswer />
//         </div>
//       )}
//     </>
//   );
// };

// export default QuestionFeed;
