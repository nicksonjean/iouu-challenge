import { PayInstallmentRepository, PayInstallment } from './db-pay-installment-protocols'

export class DbPayInstallment implements PayInstallment {
  constructor (
    private readonly payInstallmentRepository: PayInstallmentRepository
  ) {}

  async pay (id: string): Promise<void> {
    await this.payInstallmentRepository.pay(id)
  }
}
