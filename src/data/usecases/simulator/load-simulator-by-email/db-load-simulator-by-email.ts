import { LoadSimulatorByEmailRepository, LoadSimulatorByEmail, SimulatorModel } from './db-load-simulator-by-email-protocols'

export class DbLoadSimulatorByEmail implements LoadSimulatorByEmail {
  constructor (
    private readonly loadSimulatorByEmailRepository: LoadSimulatorByEmailRepository
  ) {}

  async loadByEmail (email: string): Promise<SimulatorModel> {
    return await this.loadSimulatorByEmailRepository.loadByEmail(email)
  }
}
