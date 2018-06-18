import axios from 'axios';

const YELP_API_URL = 'https://api.yelp.com/v3';
const YELP_API_KEY = 'zNN-vZj5DuwPAeEnnzMJBaSKF6agT-jLJImR7kVk-SsRfm6WVRB9osP0fWER_XZzyqzm23B1vuOh_dgrT1GEVC3DgtU5MqeA9HnF-N5ZlM3eMTglW2rHgwRAbM4UW3Yx';

const authedAxios = axios.create({
  baseURL: YELP_API_URL,
  headers: { Authorization: `Bearer ${process.env.YELP_API_KEY}` },
});

export async function searchPlaces(params) {
  try {
    const { data } = await authedAxios.get('/businesses/search', { params });
    return data.businesses;
  } catch (e) {
    console.log('search failed!', e);
  }
}
