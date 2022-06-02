import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
// import sqlite3 from 'sqlite3';
import config from 'config';

import connect from 'utils/connect'
import logger from 'utils/logger'
import routes from 'routes'

// Express app
const app = express();

// Add a list of allowed origins for CORS
const allowedOrigins = config.get<string[] >('allowedOrigins');
const options: cors.CorsOptions = {
  origin: allowedOrigins
};
app.use(cors(options));

// Add middlewares for security, parsing, logging
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded())
app.use(morgan('combined'));

const port = config.get<number>('port');

// Start the server
// TODO: to https
app.listen(port, async () => {
  logger.info(`census_api is listening on http://localhost:${port}`);

  // "Connect" to the DB
  const censusDb = await connect()
  routes(app, censusDb);
});

export default app;