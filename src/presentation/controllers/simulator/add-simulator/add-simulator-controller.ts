import { HttpResponse, HttpRequest, Controller, AddSimulator } from './add-simulator-controller-protocols'
import { badRequest, serverError, noContent } from '@/presentation/helpers/http/http-helper'
import { Validation } from '@/presentation/protocols/validation'

export class AddSimulatorController implements Controller {
  constructor(
    private readonly addSimulator: AddSimulator,
    private readonly validation: Validation
  ) { }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      await this.addSimulator.add(httpRequest.body)
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
