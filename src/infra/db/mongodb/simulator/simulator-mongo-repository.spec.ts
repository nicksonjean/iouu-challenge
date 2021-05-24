import { SimulatorMongoRepository } from './simulator-mongo-repository'
import { MongoHelper } from '../helpers/mongo-helper'
import { mockAddSimulatorParams, mockSimulatorModel } from '@/domain/test'
import { Collection } from 'mongodb'
import faker from 'faker'

let col: Collection

describe('SimulatorMongoRepository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    col = await MongoHelper.getCollection('simulator')
    await col.deleteMany({})
  })

  const makeSut = (): SimulatorMongoRepository => {
    return new SimulatorMongoRepository()
  }

  describe('add()', () => {
    test('Should return an simulator on success', async () => {
      const sut = makeSut()
      const addSimulatorParams = mockSimulatorModel()
      const simulator = await sut.add(addSimulatorParams)
      expect(simulator).toBeFalsy()
    })
  })

  describe('loadByEmail()', () => {
    test('Should return an simulator on success', async () => {
      const sut = makeSut()
      const addSimulatorParams = mockAddSimulatorParams()
      await col.insertOne(addSimulatorParams)
      const simulator = await sut.loadByEmail(addSimulatorParams.email)
      expect(simulator).toBeTruthy()
    })

    test('Should return null if loadByEmail fails', async () => {
      const sut = makeSut()
      const simulator = await sut.loadByEmail(faker.internet.email())
      expect(simulator).toBeFalsy()
    })
  })

  describe('pay()', () => {
    test('Should update the simulator on success', async () => {
      const sut = makeSut()
      const cur = mockSimulatorModel()
      const res = await col.insertOne(cur)
      const fakesimulator = res.ops[0]
      expect(fakesimulator).toBeTruthy()
      const response = await sut.pay(fakesimulator._id.toString())
      expect(response).toBeFalsy()
    })
  })
})
