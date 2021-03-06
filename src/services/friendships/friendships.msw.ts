/**
 * Generated by orval v6.2.4 🍺
 * Do not edit manually.
 * Jobbi Back-end
 * Swagger for Jobbi Back-end

Schemes: [http, https]
 * OpenAPI spec version: 1.0.0
 */
import {
  rest
} from 'msw'
import faker from 'faker'

export const getAddFriendshipMock = () => ({id: faker.random.word(), searchId: faker.random.word(), state: faker.datatype.number(), type: faker.random.word(), userId: faker.random.word()})

export const getFriendshipsMSW = () => [
rest.post('*/searches/:searchId/friendships', (req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getAddFriendshipMock()),
        )
      }),]
