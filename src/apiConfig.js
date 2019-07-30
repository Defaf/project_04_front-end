let apiUrl
const expressPort = 3000
const apiUrls = {//https://aqueous-atoll-85096.herokuapp.com
  production: 'https://git.heroku.com/fathomless-headland-72159.git',
  development: `http://localhost:${expressPort}`
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
