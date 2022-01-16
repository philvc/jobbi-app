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

export const getAddSearchMock = () => ({description: faker.random.word(), id: faker.random.word(), sector: faker.random.word(), tags: [...Array(faker.datatype.number({min: 1, max: 10}))].map(() => (faker.random.word())), title: faker.random.word(), type: faker.random.word(), userId: faker.random.word()})

export const getGetPublicSearchesMock = () => ([...Array(faker.datatype.number({min: 1, max: 10}))].map(() => ({avatarUrl: faker.random.word(), description: faker.random.word(), email: faker.random.word(), firstName: faker.random.word(), followerId: faker.random.word(), friendshipId: faker.random.word(), id: faker.random.word(), lastName: faker.random.word(), sector: faker.random.word(), tags: [...Array(faker.datatype.number({min: 1, max: 10}))].map(() => (faker.random.word())), title: faker.random.word(), type: faker.random.word(), userId: faker.random.word()})))

export const getGetMySearchMock = () => ({friends: [...Array(faker.datatype.number({min: 1, max: 10}))].map(() => ({avatarUrl: faker.random.word(), email: faker.random.word(), externalId: faker.random.word(), firstName: faker.random.word(), id: faker.random.word(), lastName: faker.random.word()})), id: faker.random.word(), sector: faker.random.word(), tags: [...Array(faker.datatype.number({min: 1, max: 10}))].map(() => (faker.random.word())), title: faker.random.word(), type: faker.random.word()})

export const getGetMyFollowedSearchesMock = () => ([...Array(faker.datatype.number({min: 1, max: 10}))].map(() => ({avatarUrl: faker.random.word(), description: faker.random.word(), firstName: faker.random.word(), id: faker.random.word(), lastName: faker.random.word(), sector: faker.random.word(), tags: [...Array(faker.datatype.number({min: 1, max: 10}))].map(() => (faker.random.word())), title: faker.random.word(), type: faker.random.word(), userId: faker.random.word()})))

export const getGetMySharedSearchesMock = () => ([...Array(faker.datatype.number({min: 1, max: 10}))].map(() => ({avatarUrl: faker.random.word(), description: faker.random.word(), firstName: faker.random.word(), id: faker.random.word(), lastName: faker.random.word(), sector: faker.random.word(), tags: [...Array(faker.datatype.number({min: 1, max: 10}))].map(() => (faker.random.word())), title: faker.random.word(), type: faker.random.word(), userId: faker.random.word()})))

export const getGetSearchByIdMock = () => ({avatarUrl: faker.random.word(), description: faker.random.word(), email: (() => faker.internet.email())(), firstName: (() => faker.name.firstName())(), friends: [...Array(faker.datatype.number({min: 1, max: 10}))].map(() => ({avatarUrl: faker.random.word(), email: faker.random.word(), externalId: faker.random.word(), firstName: faker.random.word(), id: faker.random.word(), lastName: faker.random.word()})), id: faker.random.word(), lastName: (() => faker.name.lastName())(), sector: faker.random.word(), tags: [...Array(faker.datatype.number({min: 1, max: 10}))].map(() => (faker.random.word())), title: faker.random.word(), type: faker.random.word(), userId: faker.random.word()})

export const getModifySearchMock = () => ({description: faker.random.word(), id: faker.random.word(), sector: faker.random.word(), tags: [...Array(faker.datatype.number({min: 1, max: 10}))].map(() => (faker.random.word())), title: faker.random.word(), type: faker.random.word(), userId: faker.random.word()})

export const getPostFollowerMock = () => ({id: faker.random.word(), searchId: faker.random.word(), userId: faker.random.word()})

export const getDeleteFollowerMock = () => (faker.datatype.boolean())

export const getGetSearchFriendsMock = () => ([...Array(faker.datatype.number({min: 1, max: 10}))].map(() => ({avatarUrl: faker.random.word(), email: faker.random.word(), externalId: faker.random.word(), firstName: faker.random.word(), id: faker.random.word(), lastName: faker.random.word()})))

export const getDeleteFriendshipByIdMock = () => (faker.datatype.boolean())

export const getGetSearchByIdForInvitationMock = () => ({avatarUrl: faker.random.word(), description: faker.random.word(), email: (() => faker.internet.email())(), firstName: (() => faker.name.firstName())(), friends: [...Array(faker.datatype.number({min: 1, max: 10}))].map(() => ({avatarUrl: faker.random.word(), email: faker.random.word(), externalId: faker.random.word(), firstName: faker.random.word(), id: faker.random.word(), lastName: faker.random.word()})), id: faker.random.word(), lastName: (() => faker.name.lastName())(), sector: faker.random.word(), tags: [...Array(faker.datatype.number({min: 1, max: 10}))].map(() => (faker.random.word())), title: faker.random.word(), type: faker.random.word(), userId: faker.random.word()})

export const getUpsertFriendshipMock = () => ({id: faker.random.word(), searchId: faker.random.word(), state: faker.datatype.number(), type: faker.random.word(), userId: faker.random.word()})

export const getGetSearchParticipantsMock = () => ([...Array(faker.datatype.number({min: 1, max: 10}))].map(() => ({avatarUrl: faker.random.word(), email: faker.random.word(), firstName: faker.random.word(), followerId: faker.random.word(), friendshipId: faker.random.word(), id: faker.random.word(), lastName: faker.random.word(), numberOfPosts: faker.datatype.number(), type: faker.random.word()})))

export const getGetSearchPostsMock = () => ([...Array(faker.datatype.number({min: 1, max: 10}))].map(() => ({UpdatedAt: faker.random.word(), companyAddress: faker.random.word(), companyEmail: faker.random.word(), companyName: faker.random.word(), companyPhoneNumber: faker.datatype.number(), companyUrl: faker.random.word(), contactEmail: faker.random.word(), contactFirstName: faker.random.word(), contactLastName: faker.random.word(), contactPhoneNumber: faker.datatype.number(), description: faker.random.word(), id: faker.random.word(), searchId: faker.random.word(), tags: [...Array(faker.datatype.number({min: 1, max: 10}))].map(() => (faker.random.word())), title: faker.random.word(), type: faker.random.word(), url: faker.random.word(), userEmail: faker.random.word(), userFirstName: faker.random.word(), userId: faker.random.word(), userLastName: faker.random.word()})))

export const getAddPostForSearchMock = () => ({description: faker.random.word(), id: faker.random.word(), searchId: faker.random.word(), title: faker.random.word(), type: faker.random.word(), url: faker.random.word(), userEmail: faker.random.word(), userFirstName: faker.random.word(), userId: faker.random.word(), userLastName: faker.random.word()})

export const getUpdatePostByIdMock = () => ({description: faker.random.word(), id: faker.random.word(), searchId: faker.random.word(), title: faker.random.word(), type: faker.random.word(), url: faker.random.word(), userEmail: faker.random.word(), userFirstName: faker.random.word(), userId: faker.random.word(), userLastName: faker.random.word()})

export const getDeletePostByIdMock = () => (faker.datatype.boolean())

export const getSearchesMSW = () => [
rest.post('*/searches', (req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getAddSearchMock()),
        )
      }),rest.get('*/searches/explore', (req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getGetPublicSearchesMock()),
        )
      }),rest.get('*/searches/me', (req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getGetMySearchMock()),
        )
      }),rest.get('*/searches/public', (req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getGetMyFollowedSearchesMock()),
        )
      }),rest.get('*/searches/shared', (req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getGetMySharedSearchesMock()),
        )
      }),rest.get('*/searches/:searchId', (req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getGetSearchByIdMock()),
        )
      }),rest.put('*/searches/:searchId', (req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getModifySearchMock()),
        )
      }),rest.post('*/searches/:searchId/followers', (req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getPostFollowerMock()),
        )
      }),rest.delete('*/searches/:searchId/followers/:followerId', (req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getDeleteFollowerMock()),
        )
      }),rest.get('*/searches/:searchId/friends', (req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getGetSearchFriendsMock()),
        )
      }),rest.delete('*/searches/:searchId/friendships/:friendshipId', (req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getDeleteFriendshipByIdMock()),
        )
      }),rest.get('*/searches/:searchId/invitations', (req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getGetSearchByIdForInvitationMock()),
        )
      }),rest.post('*/searches/:searchId/invitations', (req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getUpsertFriendshipMock()),
        )
      }),rest.get('*/searches/:searchId/participants', (req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getGetSearchParticipantsMock()),
        )
      }),rest.get('*/searches/:searchId/posts', (req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getGetSearchPostsMock()),
        )
      }),rest.post('*/searches/:searchId/posts', (req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getAddPostForSearchMock()),
        )
      }),rest.put('*/searches/:searchId/posts/:postId', (req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getUpdatePostByIdMock()),
        )
      }),rest.delete('*/searches/:searchId/posts/:postId', (req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getDeletePostByIdMock()),
        )
      }),]
