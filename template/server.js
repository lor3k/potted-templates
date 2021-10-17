import express, { text } from 'express';
import pg from 'pg';
import cors from 'cors';
import users from './router/users.js';
import config from './config.json';

// DB
const db = new pg.Client();
db.connect().then(() => console.log('PostgreSQL database connected'));

// APP
const app = express();
app.use(cors());
app.use(text());
app.use('/api/users', users(db));

app.listen(config.port, () =>
  console.log(`Server is listening on http://localhost:${config.port}}...`)
);
