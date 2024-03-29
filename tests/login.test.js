const app = require('../app/app');
const model = require('../app/database/models');
const request = require('supertest');

describe('Test login', () => {
  afterAll(()=>model.sequelize.close());
  test('Login invalid user', ()=>{
    return request(app)
      .post('/login')
      .field('email', 'bbb')
      .field('password', 'bbb')
      .then((response) => {
        expect(response.statusCode).toBe(400);
      })
  });
  test('Login without username', () => {
    return request(app)
      .post('/login')
      .field('password', 'aaa')
      .then((response)=>{
        expect(response.statusCode).toBe(400);
      });
  });
  test('Login without password', () => {
    return request(app)
      .post('/login')
      .field('email', 'aaa')
      .then((response)=>{
        expect(response.statusCode).toBe(400);
      });
  });
});