import express from 'express';

import { expertHelp,assignmentHelp,projectHelp } from '../controllers/help.js';

const router = express.Router();


router.post('/expert',expertHelp);
router.post('/assignment',assignmentHelp);
router.post('/project',projectHelp);

export default router;