import { SimulatorModel } from '@/domain/models/simulator'
import { AddSimulatorParams, AddSimulatorResponse } from '@/domain/usecases/simulator/add-simulator'
import faker from 'faker'

export const mockSimulatorModel = (): SimulatorModel => ({
  id: faker.random.word(),
  name: faker.name.findName(),
  email: faker.internet.email(),
  data: [
    {
      number: faker.datatype.number(),
      installment: faker.datatype.number(),
      amortization: faker.datatype.number(),
      fees: faker.datatype.number(),
      outstanding_balance: faker.datatype.number(),
    }
  ]
})

export const mockAddSimulatorResponse = (): AddSimulatorResponse => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
  data: [
    {
      number: faker.datatype.number(),
      installment: faker.datatype.number(),
      amortization: faker.datatype.number(),
      fees: faker.datatype.number(),
      outstanding_balance: faker.datatype.number(),
    }
  ]
})

export const mockAddSimulatorParams = (): AddSimulatorParams => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
  tax: faker.datatype.number(),
  number: faker.datatype.number(),
  amount: faker.datatype.number(),
})
