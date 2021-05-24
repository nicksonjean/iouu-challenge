import { DbPayInstallment } from '@/data/usecases/simulator/pay-installment/db-pay-installment'
import { PayInstallment } from '@/domain/usecases/simulator/pay-installment'
import { SimulatorMongoRepository } from '@/infra/db/mongodb/simulator/simulator-mongo-repository'

export const makeDbPayInstallment = (): PayInstallment => {
  const simulatorMongoRepository = new SimulatorMongoRepository()
  return new DbPayInstallment(simulatorMongoRepository)
}
