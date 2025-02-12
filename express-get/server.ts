import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();

app.get('/api/countries', async (req, res, next) => {
  try {
    const sql = `
    select "c"."name" as "name",
            "c"."countryId" as "countryId",
          count(*) as "cities"
          from "countries" as "c"
          join "cities" as "ci" using ("countryId")
          group by "c"."countryId";
    `;
    const result = await db.query(sql);
    const total = result.rows;
    if (!total || total.length === 0) {
      throw new ClientError(404, `not found`);
    }
    res.json(total);
  } catch (err) {
    next(err);
  }
});

app.get('/api/cities/:cityId', async (req, res, next) => {
  try {
    const { cityId } = req.params;
    if (cityId === undefined) {
      throw new ClientError(400, `cityId required`);
    }
    const sql = `
    select "ci"."cityId",
          "ci"."name",
          "c"."name" as "country"
        from "cities" as "ci"
        join "countries" as "c" using ("countryId")
        where "ci"."cityId" = $1;
    `;
    const params = [cityId];
    const result = await db.query(sql, params);
    const city = result.rows[0];
    if (!city) {
      throw new ClientError(404, `city ${cityId} not found`);
    }
    res.json(city);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
