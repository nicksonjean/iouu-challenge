import { DbLoadSimulatorByEmail } from '@/data/usecases/simulator/load-simulator-by-email/db-load-simulator-by-email'
import { LoadSimulatorByEmail } from '@/domain/usecases/simulator/load-simulator-by-email'
import { SimulatorMongoRepository } from '@/infra/db/mongodb/simulator/simulator-mongo-repository'

export const makeDbLoadSimulatorByEmail = (): LoadSimulatorByEmail => {
  const simulatorMongoRepository = new SimulatorMongoRepository()
  return new DbLoadSimulatorByEmail(simulatorMongoRepository)
}
