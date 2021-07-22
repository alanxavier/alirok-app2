import dotenv from 'dotenv'
dotenv.config()

export default {
  // Application
  APP_NAME: process.env.APP_NAME ?? 'rok-store-timestamp',
  APP_PORT: process.env.APP_PORT ?? 8001,

  // Database
  DB_HOST: process.env.DB_HOST ?? 'localhost',
  DB_PORT: process.env.DB_PORT ?? 5432,
  DB_USER: process.env.DB_USER ?? '',
  DB_PASSWORD: process.env.DB_PASSWORD ?? '',
  DB_NAME: process.env.DB_NAME ?? 'rok_challenge',

  // Services
  GET_TIMESTAMP_SERVICE_URL: process.env.GET_TIMESTAMP_SERVICE_URL ?? 'http://localhost:8000/',
}
