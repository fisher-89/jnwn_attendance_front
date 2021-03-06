const proxy = require('http-proxy-middleware')
module.exports = function(app) {
    app.use(proxy('/api/files', { target: process.env.REACT_APP_HOST_PATH }))
    app.use(proxy('/oauth', { target: process.env.REACT_APP_OA_PATH }))
    app.use(proxy('/api', { target: process.env.REACT_APP_OA_PATH }))
}