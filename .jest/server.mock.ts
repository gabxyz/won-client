import { server } from '../src/utils/mockServer/server'

beforeAll(() => {
  // listen to all test calls
  server.listen()
})

afterEach(() => {
  // reset all handlers in case they are called again
  server.resetHandlers()
})

afterAll(() => {
  // close server and clean tests
  server.close()
})
