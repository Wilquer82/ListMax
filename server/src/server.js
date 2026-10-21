import env, { validateServerEnv } from './config/env.js';
import { connectDatabase } from './db/connect.js';
import { createApp } from './app.js';

validateServerEnv();

const app = createApp();

async function startServer() {
  try {
    await connectDatabase(env.MONGODB_URI);
    app.locals.databaseConnected = true;
    app.listen(env.PORT, () => {
      console.log(`ListMax server listening on port ${env.PORT}`);
    });
  } catch (error) {
    app.locals.databaseConnected = false;
    console.error('Failed to start server:', error.message);
    process.exit(1);
  }
}

startServer();
