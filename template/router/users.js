import { Router } from 'express';

export default db => {
  const router = Router();

  const getUsers = () => db.query('SELECT * FROM users');
  const addUser = user => db.query(`INSERT INTO users (name) VALUES ('${user}')`);

  router.get('/', (req, res) => {
    getUsers()
      .then(result => res.send(result.rows))
      .catch(err => console.log(err));
  });

  router.post('/', (req, res) => {
    const user = req.body;

    addUser(user)
      .then(getUsers)
      .then(result => res.send(result.rows))
      .catch(err => console.log(err));
  });

  return router;
};
