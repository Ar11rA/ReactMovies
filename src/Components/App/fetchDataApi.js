const axios = require('axios')
// const getMockData = () => axios.get('https://movie-api-atlrumqzze.now.sh/movies-ref') // For manual test purpose only, so never used
const getData = () => axios.get('https://movie-api-atlrumqzze.now.sh/movies')
module.exports = getData