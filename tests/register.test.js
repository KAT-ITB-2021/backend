const app = require('../app/app');
const model = require('../app/database/models');
const request = require('supertest');

describe('Test register', () => {
  afterAll(()=>model.sequelize.close());
  test('Register valid user', ()=>{
    return request(app)
      .post('/api/register')
      .field('username', 'aaa')
      .field('password', 'aaa')
      .then((response) => {
        expect(response.statusCode).toBe(200);
      })
  });
  test('Register without username', () => {
    return request(app)
      .post('/api/register')
      .field('password', 'aaa')
      .then((response)=>{
        expect(response.statusCode).toBe(400);
      });
  });
  test('Register without password', () => {
    return request(app)
      .post('/api/register')
      .field('username', 'aaa')
      .then((response)=>{
        expect(response.statusCode).toBe(400);
      });
  });
});