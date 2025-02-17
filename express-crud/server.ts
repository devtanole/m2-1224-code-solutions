import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();

app.use(express.json());

app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
    select * from "grades";
    `;
    const result = await db.query(sql);
    const total = result.rows;
    if (total.length === 0) {
      throw new ClientError(404, `grade not found`);
    }
    res.status(200).json(total);
  } catch (err) {
    next(err);
  }
});

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, `Non-integer gradeId: ${gradeId}`);
    }
    if (gradeId === undefined) {
      throw new ClientError(400, `gradeId required`);
    }
    const sql = `
    select "gradeId",
            "name",
            "score"
          from "grades"
          where "gradeId" = $1;
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (!grade) {
      throw new ClientError(404, `grade ${gradeId} not found`);
    }
    res.status(200).json(grade);
  } catch (err) {
    next(err);
  }
});

app.post('/api/grades', async (req, res, next) => {
  try {
    const { name, course, score } = req.body;
    if (!name || !course || !score) {
      throw new ClientError(400, `name, course and score are required`);
    }
    if (!Number.isInteger(+score)) {
      throw new ClientError(400, `Non-integer score: ${score}`);
    }
    const sql = `
  insert into "grades" ("name",
  "course", "score")
  values ($1, $2, $3)
  returning *;
  `;
    const params = [name, course, score];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (!grade) {
      throw new ClientError(404, `grade not found`);
    }
    res.status(201).json(grade);
  } catch (err) {
    next(err);
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, `Non-integer gradeId: ${gradeId}`);
    }
    const { name, course, score } = req.body;
    if (!name || !course || !score) {
      throw new ClientError(400, `name, course and score are required`);
    }
    if (!Number.isInteger(+score)) {
      throw new ClientError(400, `Non-integer score: ${score}`);
    }
    const sql = `
  update "grades"
    set "score" = $1,
        "course" = $2,
        "name" = $3
      where "gradeId" = $4
      returning *;
  `;
    const params = [score, course, name, gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (!grade) throw new ClientError(404, `grade ${gradeId} not found`);
    res.status(200).json(grade);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, `Non-integer gradeId: ${gradeId}`);
    }
    const sql = `
    delete from "grades"
    where "gradeId" = $1
    returning *;
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (!grade) throw new ClientError(404, `grade ${gradeId} not found`);
    res.status(204).json(grade);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
