import { LoadSimulatorByEmailController } from './load-simulator-by-email-controller'
import { ServerError } from '@/presentation/errors'
import { HttpRequest } from '@/presentation/protocols'
import { serverError } from '@/presentation/helpers/http/http-helper'

import { LoadSimulatorByEmailSpy } from '@/presentation/test'
import { throwError } from '@/domain/test'
import faker from 'faker'

const mockRequest = (): HttpRequest => {
  return {
    body: {
      email: faker.name.gender(),
    }
  }
}

type SutTypes = {
  sut: LoadSimulatorByEmailController
  loadSimulatorByEmailSpy: LoadSimulatorByEmailSpy
}

const makeSut = (): SutTypes => {
  const loadSimulatorByEmailSpy = new LoadSimulatorByEmailSpy()
  const sut = new LoadSimulatorByEmailController(loadSimulatorByEmailSpy)
  return {
    sut,
    loadSimulatorByEmailSpy
  }
}

describe('LoadSimulatorByEmail Controller', () => {
  test('Should return 500 if LoadSimulatorByEmail throws', async () => {
    const { sut, loadSimulatorByEmailSpy } = makeSut()
    jest.spyOn(loadSimulatorByEmailSpy, 'loadByEmail').mockImplementationOnce(throwError)
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(serverError(new ServerError(null)))
  })

  test('Should call LoadSimulatorByEmail with correct values', async () => {
    const { sut, loadSimulatorByEmailSpy } = makeSut()
    const httpRequest = mockRequest()
    await sut.handle(httpRequest)
    expect(loadSimulatorByEmailSpy.email).toEqual(httpRequest.body.email)
  })
})
