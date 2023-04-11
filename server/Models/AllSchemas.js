import mongoose from "mongoose";


const askExpertSchema = mongoose.Schema({
  studentID: String,
  questionID: String,
  subject: String,
  questionText: String,
  fileUploaded: String,
  answersID: [String],
  answered: Boolean,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const askCommunitySchema = mongoose.Schema({
  studentID: String,
  studentName:String,
  studentImageUrl:String,
  questionID: String,
  community: String,
  questionText: String,
  fileUploaded: String,
  answered:Boolean,
  answersID: [String],
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const answersSchema = mongoose.Schema({
  answerID:String,
  studentID:String,
  studentName:String,
  studentImageUrl:String,
  questionID:String,
  answerText:String,
  fileUploaded:String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  upvotes:{
    type:Number,
    default:0
  },
  downvotes:{
    type:Number,
    default:0
  }

})

const communitiesSchema = mongoose.Schema({
  communityName: String,
  communityDescription: String,
  image:String,
  TotalMembers: Number,
  members: [String],
  activity: String,
});
const bookmarksSchema = mongoose.Schema({
  studentID: String,
  QuestionsID: [String],
});


const expertHelpSchema = mongoose.Schema({
  studentID: String,
  email:String,
  mobile:String,
  problem: String,
  extrapoints: String,
  fileUploaded: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});
const projectHelpSchema = mongoose.Schema({
  studentID: String,
  email:String,
  mobile:String,
  topicAndExplanation: String,
  extrapoints: String,
  fileUploaded: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const assignmentHelpSchema = mongoose.Schema({
  studentID: String,
  email:String,
  mobile:String,
  fileUploaded: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const notificationSchema = mongoose.Schema({
  studentID: String,
  notifiedAt: {
    type: Date,
    default: new Date(),
  },
});

export const AskExpert= mongoose.model('AskExpert',askExpertSchema);
export const AskCommunity= mongoose.model('AskCommunity',askCommunitySchema);
export const Answers= mongoose.model('Answers',answersSchema);
export const Communities= mongoose.model('Communities',communitiesSchema);
export const Bookmarks= mongoose.model('Bookmarks', bookmarksSchema);
export const ExpertHelp= mongoose.model('ExpertHelp',expertHelpSchema);
export const ProjectHelp= mongoose.model('ProjectHelp',projectHelpSchema);
export const AssignmentHelp= mongoose.model('AssignmentHelp',assignmentHelpSchema);
export const Notifications= mongoose.model('Notifications',notificationSchema);
