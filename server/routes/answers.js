import express from 'express';

import { answerQuestion,getAnswers } from '../controllers/answers.js'; 

const router = express.Router();

router.post('/',answerQuestion);
router.get('/:id',getAnswers);
// router.post('/askcommunity',askCommunityQuestion);

export default router;