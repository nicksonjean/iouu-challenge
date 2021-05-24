import { SimulatorModel } from '@/domain/models/simulator'

export interface LoadSimulatorByEmail {
  loadByEmail: (email: string) => Promise<SimulatorModel>
}
