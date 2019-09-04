
import Client from '../libs/index'

describe('libs/index.ts', () => {
  it('should initialize a constructor', () => {
    expect(() => new Client('API_Key')).not.toThrow()
  })
})
