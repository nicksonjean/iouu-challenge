import { Controller, HttpRequest, HttpResponse, Validation, badRequest, noContent, serverError, PayInstallment } from './pay-installment-controller-protocols'

export class PayInstallmentController implements Controller {
  constructor (
    private readonly payInstallment: PayInstallment,
    private readonly validation: Validation
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate({ id: httpRequest.params.id, parcel: httpRequest.params.parcel })
      if (error) {
        return badRequest(error)
      }
      await this.payInstallment.pay(httpRequest.params.id)
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}