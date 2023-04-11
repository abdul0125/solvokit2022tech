import React, { useState,useEffect } from "react";
import { Input } from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";
import "./WriteAnswer.css";

import { answerQuestion } from "../../api";

const WriteAnswer = ({quesId}) => {
  const [answer, setAnswer] = useState({
    answerID: "",
    studentID: "",
    studentName:"",
    studentImageUrl:"",
    questionID: "",
    answerText: "",
    fileUploaded: "",
  });

  const profile = JSON.parse(window.localStorage.getItem("profile"));
  
  useEffect(()=>{
    setAnswer({...answer,questionID:quesId,studentID:profile.email,studentName:profile.name,studentImageUrl:profile.imageUrl})
  },[])

  const handleSubmit = async () => {
    await answerQuestion(answer);
    console.log("reached handle submit");
  };

  const onChange = (e) => {
    const files = e.target.files;
    const file = files[0];
    getBase64(file);
  };

  const onLoad = (fileString) => {
    console.log(fileString);
    setAnswer({ ...answer, fileUploaded: fileString });
  };

  const getBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      onLoad(reader.result);
    };
  };


  return (
    <div className="WriteAnswer">
      <Input
        style={{ padding: 10, width: "100%" }}
        disableUnderline
        placeholder="Write Your Answer"
        multiline
        value={answer.answerText}
        onChange={(e) => {
          setAnswer({ ...answer, answerText: e.target.value });
        }}
      />
      <div className="WriteAnswerUpload">
        <UploadIcon style={{ color: "gray" }} />
        <input id="inputWriteAnswers" type="file" onChange={onChange} />
        <div>Upload</div>
      </div>
      <div className="WriteAnswerUpload" onClick={handleSubmit}>
        Submit
      </div>
    </div>
  );
};

export default WriteAnswer;
