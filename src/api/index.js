import axios from 'axios';


// const url = 'https://solvokit.tech/bknd';
const url = 'http://localhost:5000';



export const fetchQuestions = (skip) => axios.get(`${url}/questions/get?limit=5&skip=${skip}`);
export const fetchBookmarksQuestions = (id) => axios.get(`${url}/questions/bookmarks/${id}`);
export const fetchMyQuestions = (id) => axios.get(`${url}/questions/myquestions/${id}`);
export const askQuestion = (id,newQues,type) =>axios.post(`${url}/questions/${type}/${id}`,newQues);
export const delQuestion = (id)=>axios.delete(`${url}/questions/${id}`);

export const searchQuestions = (searchQuery)=>axios.get(`${url}/questions/search?searchQuery=${searchQuery || 'none'}`);

export const answerQuestion = (answer)=>axios.post(`${url}/answers`,answer);
export const getAnswers = (id)=>axios.get(`${url}/answers/${id}`);

export const askHelp = (help,type) =>axios.post(`${url}/help/${type}`,help);

export const getCommunities = ()=> axios.get(`${url}/communities`)
export const insertCommunity = (community)=>axios.post(`${url}/communities`,community);

export const getUserProfile = (token)=>axios.get(`${url}/user/${token}`);
export const getFullProfile = (token)=>axios.get(`${url}/user/full/${token}`);
export const updateProfile = (id,data)=>axios.patch(`${url}/user/${id}`,data);