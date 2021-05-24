import { makePayInstallmentValidation } from './pay-installment-validation-factory'
import { makeDbPayInstallment } from '@/main/factories/usecases/simulator/pay-installment/db-pay-installment-factory'
import { makeLogControllerDecorator } from '@/main/factories/decorators/log-controller-decorator-factory'
import { PayInstallmentController } from '@/presentation/controllers/simulator/pay-installment/pay-installment-controller'
import { Controller } from '@/presentation/protocols'

export const makePayInstallmentController = (): Controller => {
  const controller = new PayInstallmentController(makeDbPayInstallment(), makePayInstallmentValidation())
  return makeLogControllerDecorator(controller)
}
