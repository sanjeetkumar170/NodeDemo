const path = require('path');
const extend = require('util')._extend;
const local = require('./env/local.env');
const development = require('./env/development.env');
const test = require('./env/test.env');
const production = require('./env/production.env');
const defaults = {
  root: path.normalize(__dirname + '/..')
};

/**
 * Expose
 */

module.exports = {
  development: extend(development, defaults),
  test: extend(test, defaults),
  production: extend(production, defaults),
  local: extend(local, defaults)
}[process.env.NODE_ENV || 'local'];