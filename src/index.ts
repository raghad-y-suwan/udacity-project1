import express from 'express';
import router from './routes/index';

const app = express();
const port = 3000;

app.use('/images', router);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

export default app;
