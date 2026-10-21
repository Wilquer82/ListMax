import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import { errorHandler } from './middleware/errorHandler.js';
import healthRouter from './routes/health.js';
import env from './config/env.js';

export function createApp() {
  const app = express();

  app.set('trust proxy', 1);
  app.use(
    cors({
      origin: (origin, callback) => {
        if (!origin) return callback(null, true);
        const allowed = [env.CLIENT_ORIGIN, 'http://localhost:3000'];
        if (allowed.includes(origin)) {
          return callback(null, true);
        }
        return callback(new Error('CORS origin not allowed'));
      },
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization', 'X-CSRF-Token', 'X-Invitation-Token'],
    }),
  );
  app.use(
    helmet({
      crossOriginResourcePolicy: false,
    }),
  );
  app.use(express.json({ limit: '1mb' }));
  app.use(cookieParser());

  app.get('/health', (req, res) => res.json({ ok: true }));
  app.use('/api/v1', healthRouter);

  app.use((err, req, res, next) => {
    if (err && err.message === 'CORS origin not allowed') {
      return res.status(403).json({ error: { code: 'origin_not_allowed', message: 'Origin not allowed' } });
    }
    return errorHandler(err, req, res, next);
  });

  return app;
}
