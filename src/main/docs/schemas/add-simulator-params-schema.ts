export const addSimulatorParamsSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string'
    },
    email: {
      type: 'string'
    },
    tax: {
      type: 'number'
    },
    number: {
      type: 'number'
    },
    amount: {
      type: 'number'
    }
  },
  required: ['email', 'name', 'tax', 'number', 'amount']
}
