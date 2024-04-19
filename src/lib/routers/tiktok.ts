import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { fetchData } from '../utils/tikwmApiWrapper.js';
import { validateRequest } from 'zod-express-middleware';
import { z } from 'zod';

const router = express.Router();
router.use(bodyParser.json());

router.get(
    '/tiktok/video/info',

    cors({ maxAge: 600 }), // allow requests from all origins with 10 min cache

    validateRequest({
        body: z.object({
            url: z.string(),
        }),
    }),

    async (req, res) => {
        try {
            const videoData = await fetchData(req.body['url'] as string);
            res.status(200).json(videoData);
        } catch (error) {
            res.status(500).json(error);
        }
    }
);

export { router };
