import express from 'express';

import { getQuestions,getBookmarksQuestions,getMyQuestions,askExpertQuestion,askCommunityQuestion,deleteQuestion,getSearchQuestions } from '../controllers/questions.js';

const router = express.Router();

router.get('/get',getQuestions);
router.get('/bookmarks/:id',getBookmarksQuestions);
router.get('/myquestions/:id',getMyQuestions);
router.get('/search',getSearchQuestions);
router.delete('/:id',deleteQuestion);
router.post('/askexpert/:id',askExpertQuestion);
router.post('/askcommunity/:id',askCommunityQuestion);

export default router;