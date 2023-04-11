import React, { useState, useEffect } from "react";
import QuestionFeed from "./component/QuestionFeed";
import { fetchBookmarksQuestions } from "../api";

const Bookmarks = ({ bookmarks }) => {
  const [currentData, setCurrentData] = useState([]);
  const fullprofile = JSON.parse(window.localStorage.getItem("FullProfile"));

  console.log(bookmarks);

  useEffect(() => {
    // searchData?setCurrentData(searchData):
    newData();
  }, []);

  const newData = async () => {
    await fetchBookmarksQuestions(fullprofile[0]._id)
      .then((e) => {
        console.log(e.data);
        setCurrentData(e.data);
        console.log(currentData);
      })
      .catch(console.error());
  };

  return (
    <div className="BookmarksFeeds" style={{ marginTop: 55 }}>
      {currentData?.map((obj) => (
        <QuestionFeed
          usedFor={"bookmarks"}
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

export default Bookmarks;
