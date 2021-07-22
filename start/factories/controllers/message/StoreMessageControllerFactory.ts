import env from '../../../config/env'
import { Controller } from '../../../../contracts'
import { StoreMessageController } from '../../../../app/controllers/message/StoreMessageController'

export const makeStoreMessageController = (): Controller => {
  return new StoreMessageController(env.GET_TIMESTAMP_SERVICE_URL)
}
