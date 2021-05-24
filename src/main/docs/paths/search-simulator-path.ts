export const searchSimulator = {
  post: {
    tags: ['Busca de Financiamento'],
    summary: 'API para realizar a busca de um financiamento',
    description: 'Essa rota pode ser executada por **qualquer usuário**',
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
