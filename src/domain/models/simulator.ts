export type Simulator = {
  number: number
  installment: number
  amortization: number
  fees: number
  outstanding_balance: number
}

export type SimulatorModel = {
  id: string
  name: string
  email: string
  data: Simulator[]
  histories?: Simulator[]
}
