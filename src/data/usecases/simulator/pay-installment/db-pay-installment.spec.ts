import { DbPayInstallment } from './db-pay-installment'
import { PayInstallmentRepositorySpy } from '@/data/test'
import { throwError } from '@/domain/test'
import faker from 'faker'

type SutTypes = {
  sut: DbPayInstallment
  payInstallmentRepositorySpy: PayInstallmentRepositorySpy
}

const makeSut = (): SutTypes => {
  const payInstallmentRepositorySpy = new PayInstallmentRepositorySpy()
  const sut = new DbPayInstallment(payInstallmentRepositorySpy)
  return {
    sut,
    payInstallmentRepositorySpy
  }
}

let id: string
describe('DbPayInstallment Usecase', () => {
  beforeEach(() => {
    id = faker.random.word()
  })

  test('Should call payInstallmentRepository with correct values', async () => {
    const { sut, payInstallmentRepositorySpy } = makeSut()
    await sut.pay(id)
    expect(payInstallmentRepositorySpy.id).toBe(id)
  })

  test('Should return an simulator on success', async () => {
    const { sut } = makeSut()
    const simulator = await sut.pay(id)
    expect(simulator).toEqual(undefined)
  })

  test('Should throw if LoadAccountByEmailRepository throws', async () => {
    const { sut, payInstallmentRepositorySpy } = makeSut()
    jest.spyOn(payInstallmentRepositorySpy, 'pay').mockImplementationOnce(throwError)
    const promise = sut.pay(id)
    await expect(promise).rejects.toThrow()
  })
})
