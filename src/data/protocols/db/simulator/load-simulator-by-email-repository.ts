import { SimulatorModel } from '@/domain/models/simulator'

export interface LoadSimulatorByEmailRepository {
  loadByEmail: (email: string) => Promise<SimulatorModel>
}
