import { makeAddSimulatorValidation } from './add-simulator-validation-factory'
import { makeDbAddSimulator } from '@/main/factories/usecases/simulator/add-simulator/db-add-simulator-factory'
import { makeLogControllerDecorator } from '@/main/factories/decorators/log-controller-decorator-factory'
import { AddSimulatorController } from '@/presentation/controllers/simulator/add-simulator/add-simulator-controller'
import { Controller } from '@/presentation/protocols'

export const makeAddSimulatorController = (): Controller => {
  const controller = new AddSimulatorController(makeDbAddSimulator(), makeAddSimulatorValidation())
  return makeLogControllerDecorator(controller)
}
