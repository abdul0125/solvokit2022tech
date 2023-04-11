import express from 'express';

import { getUserProfile,saveNewProfile,updateUser,getFullProfile } from '../controllers/profile.js';

const router = express.Router();

router.get('/:token',getUserProfile);
router.get('/full/:token',getFullProfile);

router.post('/',saveNewProfile);

router.patch('/:id',updateUser);

export default router;