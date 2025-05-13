import request from 'supertest';
import express from 'express';
import userRoutes from '../src/routes/user.routes.js';


const app = express();
app.use(express.json());
app.use('/api', userRoutes);

describe('GET /api/users', () => {
  it('should return a list of users', async () => {
    const response = await request(app).get('/api/users');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true); // assuming the response is a JSON array
  });
});
