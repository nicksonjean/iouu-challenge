import { AddSimulatorController } from './add-simulator-controller'
import { MissingParamError, ServerError } from '@/presentation/errors'
import { HttpRequest } from '@/presentation/protocols'
import { serverError, badRequest } from '@/presentation/helpers/http/http-helper'

import { ValidationSpy, AddSimulatorSpy } from '@/presentation/test'
import { throwError } from '@/domain/test'
import faker from 'faker'

const mockRequest = (): HttpRequest => {
  return {
    body: {
      tax: faker.datatype.number(),
      number: faker.datatype.number(),
      value: faker.datatype.number(),
      amount: faker.datatype.number(),
    }
  }
}

type SutTypes = {
  sut: AddSimulatorController
  addSimulatorSpy: AddSimulatorSpy
  validationSpy: ValidationSpy
}

const makeSut = (): SutTypes => {
  const addSimulatorSpy = new AddSimulatorSpy()
  const validationSpy = new ValidationSpy()
  const sut = new AddSimulatorController(addSimulatorSpy, validationSpy)
  return {
    sut,
    addSimulatorSpy,
    validationSpy
  }
}

describe('AddSimulator Controller', () => {
  test('Should return 500 if AddSimulator throws', async () => {
    const { sut, addSimulatorSpy } = makeSut()
    jest.spyOn(addSimulatorSpy, 'add').mockImplementationOnce(throwError)
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(serverError(new ServerError(null)))
  })

  test('Should call AddSimulator with correct values', async () => {
    const { sut, addSimulatorSpy } = makeSut()
    const httpRequest = mockRequest()
    await sut.handle(httpRequest)
    expect(addSimulatorSpy.addSimulatorParams).toEqual(httpRequest.body)
  })

  test('Should call Validation with correct value', async () => {
    const { sut, validationSpy } = makeSut()
    const httpRequest = mockRequest()
    await sut.handle(httpRequest)
    expect(validationSpy.input).toEqual(httpRequest.body)
  })

  test('Should return 400 if Validation returns an error', async () => {
    const { sut, validationSpy } = makeSut()
    validationSpy.error = new MissingParamError(faker.random.word())
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(badRequest(validationSpy.error))
  })
})
