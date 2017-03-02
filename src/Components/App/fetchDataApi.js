const axios = require('axios')

const getData = (movies) => axios.get(`https://movie-api-atlrumqzze.now.sh/${movies}`)

module.exports = getData