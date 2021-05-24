import { SimulatorModel } from '@/domain/models/simulator'

export type AddSimulatorParams = {
  name: string
  email: string
  tax: number
  number: number
  amount: number
}

export type AddSimulatorParam = Omit<SimulatorModel, 'id'>
export type AddSimulatorResponse = Omit<AddSimulatorParam, 'histories'>

export interface AddSimulator {
  add: (data: AddSimulatorParams) => Promise<void>
}
