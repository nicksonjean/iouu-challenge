export interface PayInstallment {
  pay: (id: string) => Promise<void>
}