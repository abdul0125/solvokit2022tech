import mongoose from "mongoose";

const profileSchema = mongoose.Schema({
    name:String,
    college:String,
    dp:String,
    studentID: String,
    email:String,
    mobile:String,
    communities:[String],
    myQuestions:[String],
    bookmarks:[String],

});



export const UserProfile= mongoose.model('UserProfile',profileSchema);

