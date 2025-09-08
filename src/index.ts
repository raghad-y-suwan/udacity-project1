import express from 'express';
import router from './routes/index';
import debug from 'debug';
const app = express();
const port = 3000;

app.use('/images', router);

const log = debug('app');

app.listen(port, () => {
  log(`Server is running at http://localhost:${port}`);
});

export default app;
