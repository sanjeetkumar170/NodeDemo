const morgan = require('morgan')
const bodyParser = require('body-parser')
const compression = require('compression')
const cors = require('cors')
const cookieParser = require('cookie-parser');

module.exports = function (app) {
  // logs incoming requests with endpoint and response time
  app.use(morgan('combined'));
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: true }))
  // parse application/json
  app.use(bodyParser.json())
  // parse cookies
  app.use(cookieParser());
  // compression of data
  app.use(compression(9))
  app.use(cors())
}