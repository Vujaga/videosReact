import axios from 'axios';

const KEY = 'AIzaSyB0l2MODz3gfBFtRxvIGSbzeF1Z9uRtmAg';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
