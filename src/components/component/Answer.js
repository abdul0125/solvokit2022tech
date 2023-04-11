import React from "react";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import moment from 'moment';


import "./Answer.css";

const Answer = ({ name, date, text, image, dp, up, down }) => {
  return (
    <div className="Answer">
      <Card sx={{ minWidth: 275 }}>
        <CardHeader
          avatar={
            <Avatar
              aria-label="recipe"
              src={
                dp
                  ? dp
                  : "https://media.cheggcdn.com/media%2F78e%2F78ed8ed4-1ec2-4afa-8595-5c35217b75d1%2Fimage"
              }
            />
          }
          title={name ? name : "Shrimp and Chorizo Paella"}
          subheader={date ? moment(date).fromNow() : "Good Evening"}
        />
        <CardContent>
          <div>
            <img
              style={{ width: "100%" }}
              src={
                image
                  ? image
                  : "https://media.cheggcdn.com/media%2F78e%2F78ed8ed4-1ec2-4afa-8595-5c35217b75d1%2Fimage"
              }
              alt="Answer image not available"
              className="img-responsive"
            />
          </div>
          <p>{text ? text : "this is a paragraph of answer"}</p>
        </CardContent>
        <CardActions>
          <div className="AnswerBottom">
            <div className="answerOptions">
              <ThumbUpAltIcon style={{ color: "gray" }} />
              <div className="answerOptions_title">Upvote</div>

              {up}
            </div>
            <div className="answerOptions">
              <ThumbDownAltIcon style={{ color: "gray" }} />
              <div className="answerOptions_title">Downvote</div>
              {down}
            </div>
          </div>
        </CardActions>
      </Card>
    </div>
  );
};

export default Answer;
