import { TikWmVideoData } from './types.js';
import axios from 'axios';

const API_URL = 'https://tikwm.com/api/';

export const fetchData = async (videoUrl: string): Promise<TikWmVideoData> => {
    const response = await axios.post(API_URL, {
        url: videoUrl,
        hd: 1,
        cursor: 0,
    });
    return response.data as TikWmVideoData;
};
