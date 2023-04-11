import { AskExpert, AskCommunity } from "../Models/AllSchemas.js";
import { UserProfile } from "../Models/Profile.js";


import mongoose from "mongoose";

import { ObjectId } from "mongodb";

export const getQuestions = async (req, res) => {
  try {
    const {skip,limit}=req.query;
    console.log("here",{skip,limit});
    const questions = await AskCommunity.find().skip(skip).limit(limit);

    res.status(200).json(questions);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getBookmarksQuestions = async (req, res) => {
  const id = req.params.id
  console.log(id);
  const {bookmarks} = await UserProfile.findById(id)

  console.log(bookmarks);
  try {
    const questions = await AskCommunity.find({_id:bookmarks});

    // console.log("questions",questions);

    res.status(200).json(questions);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getMyQuestions = async (req, res) => {
  const id = req.params.id
  console.log(id);
  const {myQuestions} = await UserProfile.findById(id)

  console.log("reached my questions",myQuestions);
  try {
    const questions = await AskExpert.find({_id:myQuestions});

    console.log("questions",questions);

    res.status(200).json(questions);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// This need to be improved only working for single word text.
export const getSearchQuestions = async (req, res) => {
  const qry = req.query.searchQuery;
  const newQuery = qry.replace(/\W*\b\w{1,3}\b/g, "");

  try {
    const questions = await AskCommunity.find({
      questionText: { $regex: newQuery },
    });
    res.status(200).json(questions);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteQuestion = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);
  try {
    await AskCommunity.findByIdAndDelete(id);
    res.json({ message: "Post deleted successfully." });
  } catch (error) {
    res.status(404).json({ message: id });
  }
};

export const askExpertQuestion = async (req, res) => {
  const ques = req.body;
  const newQues = new AskExpert(ques);
  const {myQuestions} = await UserProfile.findById(req.params.id);
  // console.log(myQuestions);
  const fhg =newQues._id;
  // console.log(fhg.toString());
  // const myNewQuestions = myQuestions.push(newQues._id.toString());
  myQuestions.push(newQues._id.toString());
  // console.log(myNewQuestions);
  
  try {
    await newQues.save();
    await UserProfile.findByIdAndUpdate(req.params.id,{myQuestions:myQuestions})
    res.status(201).json(newQues);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const askCommunityQuestion = async (req, res) => {
  const ques = req.body;
  const newQues = new AskCommunity(ques);
  try {
    await newQues.save();
    res.status(201).json(newQues);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
