export interface PayInstallmentRepository {
  pay: (id: string) => Promise<void>
}