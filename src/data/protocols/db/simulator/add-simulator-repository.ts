import { AddSimulatorParam } from '@/domain/usecases/simulator/add-simulator'

export interface AddSimulatorRepository {
  add: (data: AddSimulatorParam) => Promise<void>
}
