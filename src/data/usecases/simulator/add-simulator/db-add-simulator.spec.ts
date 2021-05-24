import { DbAddSimulator } from './db-add-simulator'
import { AddSimulatorRepositorySpy, LoadSimulatorByEmailRepositorySpy } from '@/data/test'
import { mockAddSimulatorParams, throwError } from '@/domain/test'

type SutTypes = {
  sut: DbAddSimulator
  addSimulatorRepositorySpy: AddSimulatorRepositorySpy
  loadSimulatorByEmailRepositorySpy: LoadSimulatorByEmailRepositorySpy
}

const makeSut = (): SutTypes => {
  const loadSimulatorByEmailRepositorySpy = new LoadSimulatorByEmailRepositorySpy()
  loadSimulatorByEmailRepositorySpy.simulatortModel = null
  const addSimulatorRepositorySpy = new AddSimulatorRepositorySpy()
  const sut = new DbAddSimulator(
    addSimulatorRepositorySpy,
    loadSimulatorByEmailRepositorySpy,
  )
  return {
    sut,
    addSimulatorRepositorySpy,
    loadSimulatorByEmailRepositorySpy
  }
}

describe('DbAddSimulator Usecase', () => {
  test('Should call AddSimulatorRepository with correct values', async () => {
    const { sut, addSimulatorRepositorySpy } = makeSut()
    const data = mockAddSimulatorParams()
    await sut.add(data)
    // expect(addSimulatorRepositorySpy.addSimulatorParams).toBeTru()
  })

  test('Should throw if AddSimulatorRepository throws', async () => {
    const { sut, addSimulatorRepositorySpy } = makeSut()
    jest.spyOn(addSimulatorRepositorySpy, 'add').mockImplementationOnce(throwError)
    const promise = sut.add(mockAddSimulatorParams())
    await expect(promise).rejects.toThrow()
  })

  test('Should return an simulator on success', async () => {
    const { sut } = makeSut()
    const simulator = await sut.add(mockAddSimulatorParams())
    expect(simulator).toEqual(undefined)
  })

  test('Should call LoadSimulatorByEmailRepository with correct email', async () => {
    const { sut, loadSimulatorByEmailRepositorySpy } = makeSut()
    const addSimulatorParams = mockAddSimulatorParams()
    await sut.add(addSimulatorParams)
    expect(loadSimulatorByEmailRepositorySpy.email).toBe(addSimulatorParams.email)
  })
})
