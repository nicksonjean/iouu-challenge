import {
  addSimulator,
  searchSimulator,
  payPath
} from './paths/'

export default {
  '/simulator': addSimulator,
  '/simulator/search': searchSimulator,
  '/pay/{id}': payPath
}
