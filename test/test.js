const chai = require('chai');
const request = require('supertest');
const app = require('../index');

const expect = chai.expect;

describe('Express endpoint tests', () => {
  beforeEach(() => {
    server = app.server;
  });

  afterEach(() => {
    server.close();
  });
});
