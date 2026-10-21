import { beforeEach, describe, expect, it } from 'vitest';
import request from 'supertest';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { createApp } from '../src/app.js';

let mongod;

beforeEach(async () => {
  mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();

  await mongoose.connect(uri);
  const app = createApp();
  app.locals.databaseConnected = true;

  globalThis.__app = app;
});

describe('health endpoint', () => {
  it('returns_ready_when_mongodb_is_connected', async () => {
    const response = await request(globalThis.__app).get('/api/v1/health');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: 'ok', database: 'connected' });
  });

  it('returns_unavailable_when_mongodb_is_disconnected', async () => {
    const app = createApp();
    app.locals.databaseConnected = false;

    const response = await request(app).get('/api/v1/health');

    expect(response.status).toBe(503);
    expect(response.body).toEqual({ status: 'unavailable', database: 'disconnected' });
  });
});

afterEach(async () => {
  if (mongoose.connection.readyState) {
    await mongoose.disconnect();
  }
  if (mongod) {
    await mongod.stop();
  }
});
