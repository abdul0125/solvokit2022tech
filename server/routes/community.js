import express from 'express';

import apicache from 'apicache'


let cache = apicache.middleware

import { getCommunities,insertCommunity } from '../controllers/community.js';

const router = express.Router();

router.get('/',getCommunities);
router.post('/',insertCommunity);


export default router;