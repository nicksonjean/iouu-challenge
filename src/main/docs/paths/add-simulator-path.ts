export const addSimulator = {
  post: {
    tags: ['Make Financing'],
    summary: 'API to perform the financing',
    description: 'This route can be performed by ** any user **',
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/addSimulatorParams'
          }
        }
      }
    },
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
