import { useState } from "react";
import moment from "moment";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import RateReviewIcon from "@mui/icons-material/RateReview";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import Answers from "../Answers";
import WriteAnswer from "./WriteAnswer";
import "./QuestionFeed.css";
import FullScreenDialog from "./MoreScreen";
import { updateProfile } from "../../api";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

export function ExpertScreenExpert() {
  return (
    <Card
      sx={{ minWidth: 440 }}
      fullWidth
      style={{ marginBottom: 5, marginTop: 3 }}
    >
      <CardContent>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <DeleteIcon />
            </IconButton>
          }
          // title="Shrimp and Chorizo Paella"
          subheader="email and mobile"
        />
        {
          <>
            <Typography variant="h5" component="div">
              Problem
            </Typography>

            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              extrapoints
            </Typography>
          </>
        }
      </CardContent>
      <CardActions>
        <Button size="large">Download File</Button>
      </CardActions>
    </Card>
  );
}
export function ExpertScreenAssignment() {
  return (
    <Card
      sx={{ minWidth: 275 }}
      fullWidth
      style={{ marginBottom: 5, marginTop: 3 }}
    >
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <DeleteIcon />
          </IconButton>
        }
        subheader="September 14, 2016"
      />

      <CardContent>{<></>}</CardContent>
      <CardActions>
        <Button size="Large">Download File</Button>
      </CardActions>
    </Card>
  );
}
export function ExpertScreenProject() {
  return (
    <Card
      sx={{ minWidth: 440 }}
      fullWidth
      style={{ marginBottom: 5, marginTop: 3 }}
    >
      <CardContent>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <DeleteIcon />
            </IconButton>
          }
          subheader="September 14, 2016"
        />
        {
          <>
            <Typography variant="h6" component="div">
              Topic
            </Typography>

            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              extrapoints
            </Typography>
          </>
        }
      </CardContent>
      <CardActions>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
  );
}

export function AskExpertFeed({
  usedFor,
  questionText,
  qimage,
  date,
  community,
  name,
  dp,
  quesId,
  bookmarked,
}) {
  const [answerSection, setAnswerSection] = useState(false);
  const [giveanswer, setGiveAnswer] = useState(false);
  // const [bookmarkButtonState, setBookmarkButtonState] = useState(bookmarked);
  console.log("bookmarked", bookmarked);

  // const fullprofile = JSON.parse(window.localStorage.getItem("FullProfile"));

  // const handleUpdates = async () => {
  //   setBookmarkButtonState(!bookmarkButtonState);
  //   console.log(fullprofile[0]._id);

  //   const updatedprofile = await updateProfile(fullprofile[0]._id, {
  //     type: "bookmark",
  //     quesId: quesId,
  //   });
  //   console.log("uiui", updatedprofile?.data);
  // };

  // const handelAnswers = () => {
  //   if (giveanswer) {
  //     setGiveAnswer(false);
  //   }
  //   setAnswerSection(!answerSection);
  // };
  const handelGiveAnswers = () => {
    if (answerSection) {
      setAnswerSection(false);
    }
    setGiveAnswer(!giveanswer);
  };

  return (
    <Card sx={{ minWidth: 650 }} style={{ margin: 10 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <DeleteIcon name={name} quesId={quesId} type="submit" />
          </IconButton>
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
          funcall={answerSection}
        />

        {/* <div className="inputOptions" onClick={handelAnswers}>
          <QuestionAnswerIcon style={{ color: "gray" }} />
          <div className="inputOptions_title">Answers</div>
        </div> */}
        <div className="inputOptions" onClick={handelGiveAnswers}>
          <RateReviewIcon style={{ color: "gray" }} />
          <div className="inputOptions_title">Write Answer</div>
        </div>
      </CardActions>
      {/* {answerSection && (
        <div className="Answers">
          <Answers quesId={quesId} funcall={answerSection} />
        </div>
      )} */}
      {giveanswer && (
        <div className="GiveAnswers">
          <WriteAnswer quesId={quesId} />
        </div>
      )}
    </Card>
  );
}
