import { AddSimulator, AddSimulatorParams } from '@/domain/usecases/simulator/add-simulator'
import { LoadSimulatorByEmail } from '@/domain/usecases/simulator/load-simulator-by-email'
import { SimulatorModel } from '@/domain/models/simulator'
import { mockSimulatorModel } from '@/domain/test'
import { PayInstallment } from '@/domain/usecases/simulator/pay-installment'

export class AddSimulatorSpy implements AddSimulator {
  addSimulatorParams: AddSimulatorParams

  async add (account: AddSimulatorParams): Promise<void> {
    this.addSimulatorParams = account
  }
}

export class LoadSimulatorByEmailSpy implements LoadSimulatorByEmail {
  simulatorModel = mockSimulatorModel()
  email: string

  async loadByEmail (email: string): Promise<SimulatorModel> {
    this.email = email
    return this.simulatorModel
  }
}

export class PayInstallmentSpy implements PayInstallment {
  id: string

  async pay (id: string): Promise<void> {
    this.id = id
  }
}