import dotenv from 'dotenv';

dotenv.config();

const getEnv = (key, fallback) => {
  const value = process.env[key];
  if (value === undefined || value === '') {
    return fallback;
  }
  return value;
};

const env = {
  NODE_ENV: getEnv('NODE_ENV', 'development'),
  PORT: Number(getEnv('PORT', '4000')),
  MONGODB_URI: getEnv('MONGODB_URI', 'mongodb://127.0.0.1:27017/listmax'),
  CLIENT_ORIGIN: getEnv('CLIENT_ORIGIN', 'http://localhost:5173'),
  JWT_ACCESS_SECRET: getEnv('JWT_ACCESS_SECRET', 'development-secret-change-me'),
};

export function validateServerEnv() {
  const requiredKeys = ['MONGODB_URI', 'JWT_ACCESS_SECRET'];
  const missing = requiredKeys.filter((key) => !env[key]);

  if (missing.length > 0) {
    throw new Error(`Missing required server env vars: ${missing.join(', ')}`);
  }

  return env;
}

export default env;
