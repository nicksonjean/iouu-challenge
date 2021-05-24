import paths from './paths'
import components from './components'
import schemas from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'IOUU - Challenge (API PriceTable)',
    description: 'This is the API documentation made by Nickson Jeanmerson for the IOUU challenge.',
    version: '1.0.0',
    contact: {
      name: 'Nickson Jeanmerson',
      email: 'nickson.jeanmerson@gmail.com'
    }
  },
  servers: [{
    url: '/api',
    description: 'Main Server'
  }],
  paths,
  schemas,
  components
}
