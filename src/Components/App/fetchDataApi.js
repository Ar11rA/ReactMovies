const axios = require('axios')
const getData = () => axios.get('https://movie-api-atlrumqzze.now.sh/movies-ref')

module.exports = getData