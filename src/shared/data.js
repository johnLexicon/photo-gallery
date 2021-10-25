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

export { fetchAlbums };
