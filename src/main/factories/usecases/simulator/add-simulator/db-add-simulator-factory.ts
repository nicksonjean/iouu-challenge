import { DbAddSimulator } from '@/data/usecases/simulator/add-simulator/db-add-simulator'
import { AddSimulator } from '@/domain/usecases/simulator/add-simulator'
import { SimulatorMongoRepository } from '@/infra/db/mongodb/simulator/simulator-mongo-repository'

export const makeDbAddSimulator = (): AddSimulator => {
  const simulatorMongoRepository = new SimulatorMongoRepository()
  return new DbAddSimulator(simulatorMongoRepository, simulatorMongoRepository)
}
