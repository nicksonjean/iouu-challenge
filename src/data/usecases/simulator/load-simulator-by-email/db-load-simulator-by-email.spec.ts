import { DbLoadSimulatorByEmail } from './db-load-simulator-by-email'
import { LoadSimulatorByEmailRepositorySpy } from '@/data/test'
import { throwError } from '@/domain/test'
import faker from 'faker'

type SutTypes = {
  sut: DbLoadSimulatorByEmail
  loadSimulatorByEmailRepositorySpy: LoadSimulatorByEmailRepositorySpy
}

const makeSut = (): SutTypes => {
  const loadSimulatorByEmailRepositorySpy = new LoadSimulatorByEmailRepositorySpy()
  const sut = new DbLoadSimulatorByEmail(loadSimulatorByEmailRepositorySpy)
  return {
    sut,
    loadSimulatorByEmailRepositorySpy
  }
}

let email: string
describe('DbLoadSimulatorByEmail Usecase', () => {
  beforeEach(() => {
    email = faker.random.word()
  })

  test('Should call LoadSimulatorByEmailRepository with correct values', async () => {
    const { sut, loadSimulatorByEmailRepositorySpy } = makeSut()
    await sut.loadByEmail(email)
    expect(loadSimulatorByEmailRepositorySpy.email).toBe(email)
  })

  test('Should return null if LoadSimulatorByEmailRepository returns null', async () => {
    const { sut, loadSimulatorByEmailRepositorySpy } = makeSut()
    loadSimulatorByEmailRepositorySpy.simulatortModel = null
    const simulator = await sut.loadByEmail(email)
    expect(simulator).toBeNull()
  })

  test('Should return an simulator on success', async () => {
    const { sut, loadSimulatorByEmailRepositorySpy } = makeSut()
    const simulator = await sut.loadByEmail(email)
    expect(simulator).toEqual(loadSimulatorByEmailRepositorySpy.simulatortModel)
  })

  test('Should throw if LoadAccountByEmailRepository throws', async () => {
    const { sut, loadSimulatorByEmailRepositorySpy } = makeSut()
    jest.spyOn(loadSimulatorByEmailRepositorySpy, 'loadByEmail').mockImplementationOnce(throwError)
    const promise = sut.loadByEmail(email)
    await expect(promise).rejects.toThrow()
  })
})
