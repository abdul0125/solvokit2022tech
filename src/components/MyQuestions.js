import React,{useState,useEffect} from 'react'
import QuestionFeed from './component/QuestionFeed';
import { fetchMyQuestions } from '../api';

const MyQuestions = ({myQuestions,bookmarks}) => {



  const [currentData, setCurrentData] = useState([]);
  const fullprofile = JSON.parse(window.localStorage.getItem("FullProfile"));

  console.log(myQuestions);

  useEffect(() => {
    // searchData?setCurrentData(searchData):
    newData();
  }, []);

  const newData = async () => {
    await fetchMyQuestions(fullprofile[0]._id)
      .then((e) => {
        console.log(e.data);
        setCurrentData(e.data);
        console.log(currentData);
      })
      .catch(console.error());
  };


  return (
    <div> <h2 style={{textAlign:'center'}}>
      MyQuestions
      </h2>

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
  )
}

export default MyQuestions