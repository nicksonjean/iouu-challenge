import { HttpResponse, HttpRequest, Controller, LoadSimulatorByEmail } from './load-simulator-by-email-controller-protocols'
import { serverError, ok } from '@/presentation/helpers/http/http-helper'

export class LoadSimulatorByEmailController implements Controller {
  constructor (
    private readonly loadSimulatorByEmail: LoadSimulatorByEmail
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const response = await this.loadSimulatorByEmail.loadByEmail(httpRequest.body.email)
      return ok(response)
    } catch (error) {
      return serverError(error)
    }
  }
}
