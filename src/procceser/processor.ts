import sharp from 'sharp';

const processImage = async (
  input: string,
  output: string,
  width: number,
  height: number,
) => {
  await sharp(input).resize(width, height).toFile(output);
};

export default processImage;
