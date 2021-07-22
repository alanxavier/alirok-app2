import { Router } from 'express'
import { adaptRoute } from '../adapters/ExpressRouteAdapter'
import { makeStoreMessageController } from '../factories/controllers/message'

export default (router: Router): void => {
  router.post('/', adaptRoute(makeStoreMessageController()))
}
