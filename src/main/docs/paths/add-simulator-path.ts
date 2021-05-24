export const addSimulator = {
  post: {
    tags: ['Realizar Financiamento'],
    summary: 'API para realizar o financiamento',
    description: 'Essa rota pode ser executada por **qualquer usuário**',
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
        description: 'Sucesso',
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
