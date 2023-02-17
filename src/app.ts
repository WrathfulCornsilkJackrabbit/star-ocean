import express from 'express';
import routes from './routes';

const port = 8080;

const app = express();

app.use('/', routes);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
