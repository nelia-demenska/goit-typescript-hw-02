import axios from 'axios';
import { UnsplashImage } from '../types';


const ACCESS_KEY = "yqyJLUNL1Fr6NbTPi7LbXW18waP03bn7-ahBXVDtc68";

export const fetchImages = async (
  query: string,
  page: number
): Promise<UnsplashImage[]> => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    params: {
      query,
      page,
      per_page: 12,
    },
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
    },
  });

  return response.data.results;
};