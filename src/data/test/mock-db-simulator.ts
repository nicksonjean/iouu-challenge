import { AddSimulatorRepository } from '@/data/protocols/db/simulator/add-simulator-repository'
import { LoadSimulatorByEmailRepository } from '@/data/protocols/db/simulator/load-simulator-by-email-repository'
import { AddSimulatorParam } from '@/domain/usecases/simulator/add-simulator'
import { SimulatorModel } from '@/domain/models/simulator'
import { mockSimulatorModel } from '@/domain/test'
import { PayInstallmentRepository } from '../protocols/db/simulator/pay-installment-repository'

export class AddSimulatorRepositorySpy implements AddSimulatorRepository {
  addSimulatorParams: AddSimulatorParam

  async add (data: AddSimulatorParam): Promise<void> {
    this.addSimulatorParams = data
  }
}

export class PayInstallmentRepositorySpy implements PayInstallmentRepository {
  id: string

  async pay (id: string): Promise<void> {
    this.id = id
  }
}

export class LoadSimulatorByEmailRepositorySpy implements LoadSimulatorByEmailRepository {
  simulatortModel = mockSimulatorModel()
  email: string

  async loadByEmail (email: string): Promise<SimulatorModel> {
    this.email = email
    return this.simulatortModel
  }
}
