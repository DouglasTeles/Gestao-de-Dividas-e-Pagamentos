import axios from 'axios'

const axios = axios.create({
    baseURL:'https://dashboard.heroku.com/apps/gestao-republica/deploy/github'
})

export default api   