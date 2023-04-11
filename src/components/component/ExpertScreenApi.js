import axios from "axios";
const url = 'http://localhost:5000';

export const getAskToExpert = () => axios.get(`${url}/tutors/questions`);
export const getExpertHelp = () => axios.get(`${url}/tutors/EH`);
export const getAssignmentHelp = () => axios.get(`${url}/tutors/AH`)
export const getProjectHelp = () => axios.get(`${url}/tutors/PH`)



export const delExpertHelp = (id) => axios.delete(`${url}/tutors/${id}`);
export const delAssignmentHelp = (id) => axios.delete(`${url}/tutors${id}`)
export const delProjectHelp = (id) => axios.delete(`${url}/tutors${id}`)


