export const payPath = {
  put: {
    tags: ['Pagar Parcela'],
    summary: 'API para quitar 1 parcela',
    description: 'Essa rota pode ser executada por **qualquer usuário**',
    parameters: [{
      in: 'path',
      name: 'id',
      description: 'ID da conta',
      required: true,
      schema: {
        type: 'string'
      }
    }],
    responses: {
      204: {
        description: 'Sucesso',
        content: {
          'application/json': { }
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
