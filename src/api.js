import axios from 'axios';

const api = axios({
   method: 'get',
   baseURL: 'https://weather-ydn-yql.media.yahoo.com/forecastrss',  
   headers: {
        'X-Yahoo-App-Id': 'D1s2tV5Y',
    }
});


export default api;