import React, { useEffect, useState } from 'react';
import Answer from './component/Answer';
import './Answers.css'

import { getAnswers } from '../api/index.js';

const Answers = ({quesId,funcall}) => {

  useEffect(()=>{
    loadData();
  },[funcall])

  const [answersData,setAnswersData]=useState([]);
  // console.log(answersData);

  const loadData = async ()=>{
    await getAnswers(quesId).then(
      // data=>console.log(data)
      (obj)=>setAnswersData(obj.data)
    ).catch(
      (error)=>console.log(error)
    )
  }



  return (
    <div className='Answers'>

      {answersData?.map(
        (obj)=>(
          
          <Answer name={obj.studentName} image={obj.fileUploaded} text={obj.answerText} dp={obj.studentImageUrl} date={obj.createdAt} up={obj.upvotes} down={obj.downvotes} />
        )
      )}
        
        <Answer/>
        {/* <br/>
        <Answer/>
        <Answer/>
        <Answer/> */}


    </div>
  )
}

export default Answers