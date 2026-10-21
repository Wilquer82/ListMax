import { Router } from 'express';

const router = Router();

router.get('/health', (req, res) => {
  const isDbConnected = req.app.locals?.databaseConnected === true;

  if (!isDbConnected) {
    return res.status(503).json({
      status: 'unavailable',
      database: 'disconnected',
    });
  }

  return res.status(200).json({
    status: 'ok',
    database: 'connected',
  });
});

export default router;
