import path from 'path';
import fs from 'fs';
import processImage from '../procceser/processor';

describe('Test image processing function', () => {
  const input = path.resolve('images\\full\\icelandwaterfall.jpg');
  const output = path.resolve('images\\thumb\\icelandwaterfall.jpg');

  it('this should create a resized image', async () => {
    await processImage(input, output, 400, 400);
    expect(fs.existsSync(output)).toBeTrue();
  });
});
