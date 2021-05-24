export const searchSimulator = {
  post: {
    tags: ['Financing Search'],
    summary: 'API to perform the search for funding',
    description: 'This route can be performed by ** any user **',
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/searchSimulatorParams'
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
