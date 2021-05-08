import axios from "axios";


export default axios.create({
    baseURL:"https://api.unsplash.com",
    headers:{
        Authorization: 'Client-ID Xw7tiPDquBdNAiWuygkUe2SuySAplwrf-6rmExtWGhs',
    }
});

 