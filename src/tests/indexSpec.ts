import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Test endpoint responses', () => {
  //   it("gets the api image endpoint", async () => {
  //     const response = await request.get("/images");
  //     expect(response.status).toBe(200);
  //   });
  it('should return 404 if image not found', async () => {
    const response = await request.get(
      '/images?filename=notfound&width=200&height=200',
    );
    expect(response.status).toBe(404);
  });

  it('should return 400 if parameters missing', async () => {
    const response = await request.get('/images');
    expect(response.status).toBe(400);
  });
});
