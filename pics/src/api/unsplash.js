import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID F9gcv0ALQ_hQhaQ2pTfpyv3R37-YYD3Ejv31bc6MIKA'
    }
});