import * as axios from 'axios';
import { API } from './config';

const fetchAlbums = async () => {
  try {
    const response = await axios.get(`${API}/albums`);
    return response.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const fetchPhotos = async (albumId) => {
  try {
    const response = await axios.get(`${API}/photos/?albumId=${albumId}`);
    return response.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export { fetchAlbums, fetchPhotos };
