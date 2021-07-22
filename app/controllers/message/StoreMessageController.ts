import axios from 'axios'
import { Controller, ControllerContext, HttpResponse } from '../../../contracts'
import { MissingParamError } from '../../../lib/errors'
import { makeDatabasePool } from '../../helpers/DatabaseHelper'

export class StoreMessageController implements Controller {
  constructor(private readonly getTimestampServiceUrl: string) { }

  async handle({ request, response }: ControllerContext): Promise<HttpResponse> {
    const { nickname, message } = request.body

    if (!message) {
      return response.badRequest(new MissingParamError('message'))
    }

    const { data } = await axios.get(this.getTimestampServiceUrl)
    const { timestamp, service } = data

    const timestampInstance = new Date(timestamp)

    const pool = makeDatabasePool()
    const sql = 'INSERT INTO messages (message, nickname, service_name, timestamp) VALUES ($1, $2, $3, $4) RETURNING uuid'
    const { rows: [inserted] } = await pool.query(sql, [message, nickname, service, timestampInstance])
    const { uuid } = inserted

    return response.created({
      uuid,
      message,
      nickname: nickname ?? null,
      service_name: service,
      timestamp
    })
  }
}
