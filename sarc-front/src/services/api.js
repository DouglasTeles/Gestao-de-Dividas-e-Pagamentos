import axios from 'axios';


const api = axios.create({
    baseURL:'https://dashboard.heroku.com/apps/gestao-republica/deploy/github'
});

export default api;   