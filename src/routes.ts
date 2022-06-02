import { Express, Request, Response } from 'express';
import sqlite3 from 'sqlite3';

import logger from 'utils/logger'

/**
 * Routes/endpoints of the API.
 * @param {Express} app Express app on which the routes are created.
 */
function routes(app: Express, database: sqlite3.Database) {
  // Just the root route.
  app.get('/', (req: Request, res: Response) => {
    res.send('The sedulous hyena ate the antelope!');
  });

  // Route for an API healthcheck, should return 200.
  app.get('/healthcheck', (req: Request, res: Response) => {
    res.sendStatus(200);
  });

  // Route to get the list of demographics.
  // Returns an array of of all the demographics available in the table.
  app.get('/demographics', (req: Request, res: Response) => {
    database.all(
      `SELECT name FROM(PRAGMA_TABLE_INFO('census_learn_sql'))`, (error:any, response:any) => {
      res.send(response.map(function (obj) {
        return obj.name;
      }))
    });
  });

  // Route to get a demographics based on the request body (type JSON).
  // Returns an array of object with the following structure, sorted by descending order of the count:
  // {
  //  "{field}": value of the field
  //  "COUNT(*)": number of rows with this field value
  //  "AVG(age)": average age for this field value
  // }
  app.post('/demographics/grouped', (req: Request, res: Response) => {
    logger.info(req)
    logger.info(req.body)

    const field = req.body.field
    database.all(
    `SELECT "${field}", COUNT(*), ROUND(AVG(age), 2) FROM census_learn_sql
      GROUP BY "${field}"
      ORDER BY COUNT(*) DESC
      `, (error:any, response:any) => {
      res.send(response)
    });
  });
}

export default routes;