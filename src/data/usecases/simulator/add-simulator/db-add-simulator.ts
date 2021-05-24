import { Simulator } from '@/domain/models/simulator'
import { AddSimulatorParam } from '@/domain/usecases/simulator/add-simulator'
import { AddSimulator, AddSimulatorParams, AddSimulatorRepository, LoadSimulatorByEmailRepository } from './db-add-simulator-protocols'

export class DbAddSimulator implements AddSimulator {
  constructor(
    private readonly addSimulatorRepository: AddSimulatorRepository,
    private readonly loadSimulatorByEmailRepository: LoadSimulatorByEmailRepository
  ) { }

  async add(data: AddSimulatorParams): Promise<void> {
    const simulator = await this.loadSimulatorByEmailRepository.loadByEmail(data.email)
    if (!simulator) {
      const numbers = this.installment(data.number)
      const calculator = this.callCalculator(data, numbers)
      await this.addSimulatorRepository.add(calculator)
    } else {
      const numbers = this.installment(data.number)
      data.amount = simulator.data.reduce((acc: number, cur: Simulator) => acc + cur.installment, 0)
      const calculator = this.callCalculator(data, numbers)
      await this.addSimulatorRepository.add({ ...calculator, histories: simulator.data })
    }
  }

  private installment(parcel: number): number[] {
    const numbers = []
    for (let index = 0; index < parcel; index++) {
      numbers.push(index + 1)
    }
    return numbers
  }

  private callCalculator(data: AddSimulatorParams, numbers: number[]): AddSimulatorParam {
    let amount: number = data.amount
    const model: any = {
      data: [],
      email: data.email,
      name: data.name
    }
    const elements: any[] = []

    for (const parcel of numbers) {
      const amountTax = this.calculatorTax(data.tax, amount)
      const valueParcel = this.calculator(data)
      const amortization = this.calculatorAmortization(amountTax, valueParcel)
      const total = this.toCalculateDebtBalance(amount, amortization)

      const element: any = {
        number: parcel,
        fees: Math.ceil(amountTax * 100) / 100,
        amortization: Math.ceil(amortization * 100) / 100,
        installment: Math.ceil(valueParcel * 100) / 100,
        outstandingBalance: Math.ceil(total * 100) / 100
      }

      elements.push(element)

      amount -= amortization
      model.data = elements
    }

    return model
  }

  private toCalculateDebtBalance(amount: number, amortization: number): number {
    return amount - amortization
  }

  // calculo do juros
  private calculatorTax(tax: number, amount: number): number {
    return (amount / 100) * tax
  }

  // calcula de amortização
  private calculatorAmortization(tax: number, amount: number): number {
    return amount - tax
  }

  // calcular financimento
  private calculator(data: any): number {
    return data.amount * ((Math.pow((1 + this.tax(data.tax)), data.number) * this.tax(data.tax)) / (Math.pow((1 + this.tax(data.tax)), data.number) - 1))
  }

  // calcular tax
  private tax(value: number): number {
    return value / 100
  }
}
