import APP from 'express';
import Logger from "./app/utils/logger";
import routes from './routes';
import DBConnection from './config/db-connection';

const app = new APP();
require('./config/express')(app);
global.logger = Logger;

//check DB connectivity
DBConnection.checkConnection();

app.use('/api',routes);

module.exports = app;
