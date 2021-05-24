import { Router } from 'express'

import { adaptRoute } from '@/main/adapters/express-route-adapter'
import { makeAddSimulatorController } from '@/main/factories/controllers/simulator/add-simulator/add-simulator-controller-factory'
import { makeLoadSimulatorByEmailController } from '../factories/controllers/simulator/load-simulator-by-email/load-simulator-by-email-controller-factory'
import { makePayInstallmentController } from '../factories/controllers/simulator/pay-installment/pay-installment-controller-factory'

export default (router: Router): void => {
  router.post('/simulator', adaptRoute(makeAddSimulatorController()))
  router.post('/simulator/search', adaptRoute(makeLoadSimulatorByEmailController()))
  router.put('/pay/:id', adaptRoute(makePayInstallmentController()))
}
