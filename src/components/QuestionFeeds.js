import React, { useEffect, useState } from "react";
import QuestionFeed from "./component/QuestionFeed";
import { Box, LinearProgress } from "@mui/material";

import { fetchQuestions } from "../api/index.js";
import { InfiniteScroll } from "./utils/infiniteScroll";

import Ask from "./component/Ask";

const QuestionFeeds = ({ aske, askc,searchData,bookmarks }) => {
  const [currentData, setCurrentData] = useState([]);
  const [skip,setSkip] =useState(0);
  const [hasMore,setHasMore]=useState(true);
  const [isLoading,setLoading]=useState(false);

  console.log(bookmarks);

  useEffect(() => {
    // searchData?setCurrentData(searchData):
    newData();
  }, [searchData,]);

  // const newData = async () => {
  //   await fetchQuestions()
  //     .then((e) => {
  //       console.log(e.data);
  //       setCurrentData(e.data);
  //       console.log(currentData);
  //     })
  //     .catch(console.error());
  // };
  const newData = async () => {
    await fetchQuestions(skip)
      .then((e) => {
        console.log(e.data);
        setCurrentData([...currentData,...e.data]);
        setHasMore(e.data.length!==0)
        setSkip(skip+e.data.length);
        setLoading(false)
        console.log(currentData);
      })
      .catch(console.error());
  };

  return (
    <div className="QuestionsFeeds" style={{ marginTop: 62,height:'100%',overflow:'auto' }}
    // onScroll={(e)=>
    //   {hasMore&&!isLoading&&InfiniteScroll.handleScroll(e,newData,setLoading)}
    // }
    onScroll={(e)=>console.log("scrolling",e)}
    >
      
      {aske && <Ask usedFor="askexpert" />}
      {askc && <Ask usedFor="askcommunity" />}
      

      {currentData==null?<LinearProgress color="inherit" />:null}

      {searchData?.map((obj) => (
        <QuestionFeed
          usedFor="dashboard"
          name={obj.studentName}
          dp={obj.studentImageUrl}
          questionText={obj.questionText}
          community={obj.community}
          date={obj.createdAt}
          qimage={obj.fileUploaded}
          quesId={obj._id}
        />
      ))}
      {currentData?.map((obj) => (
        <QuestionFeed
          usedFor="dashboard"
          name={obj.studentName}
          dp={obj.studentImageUrl}
          questionText={obj.questionText}
          community={obj.community}
          date={obj.createdAt}
          qimage={obj.fileUploaded}
          quesId={obj._id}
          bookmarked={bookmarks?.includes(obj._id)}
        />
      ))}
    </div>
  );
};

export default QuestionFeeds;
