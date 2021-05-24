import { PayInstallmentController } from './pay-installment-controller'
import { MissingParamError, ServerError } from '@/presentation/errors'
import { HttpRequest } from '@/presentation/protocols'
import { serverError, badRequest } from '@/presentation/helpers/http/http-helper'

import { ValidationSpy, PayInstallmentSpy } from '@/presentation/test'
import { throwError } from '@/domain/test'
import faker from 'faker'

const mockRequest = (): HttpRequest => {
  return {
    params: {
      parcel: faker.datatype.number(),
      id: faker.datatype.string(),
    }
  }
}

type SutTypes = {
  sut: PayInstallmentController
  payInstallmentSpy: PayInstallmentSpy
  validationSpy: ValidationSpy
}

const makeSut = (): SutTypes => {
  const payInstallmentSpy = new PayInstallmentSpy()
  const validationSpy = new ValidationSpy()
  const sut = new PayInstallmentController(payInstallmentSpy, validationSpy)
  return {
    sut,
    payInstallmentSpy,
    validationSpy
  }
}

describe('AddSimulator Controller', () => {
  test('Should return 500 if AddSimulator throws', async () => {
    const { sut, payInstallmentSpy } = makeSut()
    jest.spyOn(payInstallmentSpy, 'pay').mockImplementationOnce(throwError)
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(serverError(new ServerError(null)))
  })

  test('Should call AddSimulator with correct values', async () => {
    const { sut, payInstallmentSpy } = makeSut()
    const httpRequest = mockRequest()
    await sut.handle(httpRequest)
    expect(payInstallmentSpy.id).toEqual(httpRequest.params.id)
  })

  test('Should call Validation with correct value', async () => {
    const { sut, validationSpy } = makeSut()
    const httpRequest = mockRequest()
    await sut.handle(httpRequest)
    expect(validationSpy.input).toEqual(httpRequest.params)
  })

  test('Should return 400 if Validation returns an error', async () => {
    const { sut, validationSpy } = makeSut()
    validationSpy.error = new MissingParamError(faker.random.word())
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(badRequest(validationSpy.error))
  })
})
