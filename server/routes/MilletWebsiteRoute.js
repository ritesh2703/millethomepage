import express from 'express';
import { createMilletWebsite, getMilletWebsites } from '../controller/MilletWebsiteController.js';

const router = express.Router();

// Route to create a new millet website
router.post('/', createMilletWebsite);

// Route to get all millet websites
router.get('/', getMilletWebsites);

export default router;
