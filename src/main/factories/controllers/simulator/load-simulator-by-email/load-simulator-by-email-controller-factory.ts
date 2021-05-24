import { makeDbLoadSimulatorByEmail } from '@/main/factories/usecases/simulator/load-simulator-by-email/db-load-simulator-by-email-factory'
import { makeLogControllerDecorator } from '@/main/factories/decorators/log-controller-decorator-factory'
import { LoadSimulatorByEmailController } from '@/presentation/controllers/simulator/load-simulator-by-email/load-simulator-by-email-controller'
import { Controller } from '@/presentation/protocols'

export const makeLoadSimulatorByEmailController = (): Controller => {
  const controller = new LoadSimulatorByEmailController(makeDbLoadSimulatorByEmail())
  return makeLogControllerDecorator(controller)
}
