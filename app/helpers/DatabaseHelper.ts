import env from '../../start/config/env'
import { EventEmitter } from 'stream'
import { Pool } from 'pg'

export type DatabaseConnection = EventEmitter & Pool

export function makeDatabasePool (): DatabaseConnection {
  return new Pool({
    host: env.DB_HOST,
    port: env.DB_PORT as number,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME
  })
}
