export const payPath = {
  put: {
    tags: ['Pay Installment'],
    summary: 'API to settle 1 installment',
    description: 'This route can be performed by ** any user **',
    parameters: [{
      in: 'path',
      name: 'id',
      description: 'Account ID',
      required: true,
      schema: {
        type: 'string'
      }
    }],
    responses: {
      204: {
        description: 'Success',
        content: {
          'application/json': {}
        }
      },
      400: {
        $ref: '#/components/badRequest'
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  }
}
