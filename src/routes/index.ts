import express from 'express';
import fs from 'fs';

const router = express.Router();

router.get('/', async (req, res) => {
  //res.send('image routes');

  const filename = req.query.filename as string;
  const width = parseInt(req.query.width as string);
  const height = parseInt(req.query.height as string);
  if (!filename || !width || !height) {
    return res
      .status(400)
      .send(
        'this is image route if you want to resize its required provide filename, width, and height',
      );
  }

  // res.status(200).send('Image processed successfully');

  const input = `images/full/${filename}.jpg`;
  const output = `images/thumb/${filename}_${width}x${height}.jpg`;
  if (!fs.existsSync(input)) {
    return res.status(404).send('this Image is  not found');
  }

  if (fs.existsSync(output)) {
    return res.status(200).sendFile(output, { root: '.' });
  }
  try {
    const processImage = (await import('../procceser/processor')).default;
    await processImage(input, output, width, height);
    return res.status(200).sendFile(output);
  } catch (error) {
    console.error('Error processing image:', error);

    return res.status(500).send('Error processing image');
  }
});
export default router;
