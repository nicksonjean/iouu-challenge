import { AddSimulatorParams } from './add-simulator'

export interface SaveSimulator {
  save: (data: AddSimulatorParams) => Promise<void>
}
