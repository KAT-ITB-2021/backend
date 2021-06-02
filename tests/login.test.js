const app = require('../app/app');
const model = require('../app/database/models');
const request = require('supertest');

describe('Test login', () => {
  afterAll(()=>model.sequelize.close());
  test('Login invalid user', ()=>{
    return request(app)
      .post('/api/login')
      .field('username', 'aaa')
      .field('password', 'aaa')
      .then((response) => {
        expect(response.statusCode).toBe(400);
      })
  });
  test('Login without username', () => {
    return request(app)
      .post('/api/register')
      .field('password', 'aaa')
      .then((response)=>{
        expect(response.statusCode).toBe(400);
      });
  });
  test('Login without password', () => {
    return request(app)
      .post('/api/register')
      .field('username', 'aaa')
      .then((response)=>{
        expect(response.statusCode).toBe(400);
      });
  });
});