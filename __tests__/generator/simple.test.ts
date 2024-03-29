import { Generator } from '../../src'

describe('Generators Tests', () => {
  it('should generate from simple query', () => {
    const source = 'SELECT user_name , id FROM users'
    const generator = new Generator([
      { id: 'id1', user_name: 'user1' },
      { id: 'id2', user_name: 'user2' },
    ])
    const results = generator.execute(source)
    expect(results).toEqual([
      { user_name: 'user1', id: 'id1' },
      { user_name: 'user2', id: 'id2' },
    ])
  })

  it('should generate from simple query with where', () => {
    const source = "SELECT user_name , id FROM users where id = 'id1' ;"
    const generator = new Generator([
      { id: 'id1', user_name: 'user1' },
      { id: 'id2', user_name: 'user2' },
    ])
    const results = generator.execute(source)
    expect(results).toEqual([{ user_name: 'user1', id: 'id1' }])
  })

  it('should generate from simple query with where', () => {
    const source =
      "SELECT user_name as username , id FROM users where id = 'id1' ;"
    const generator = new Generator([
      { id: 'id1', user_name: 'user1' },
      { id: 'id2', user_name: 'user2' },
    ])
    const results = generator.execute(source)
    generator.source
    expect(results).toEqual([{ username: 'user1', id: 'id1' }])
  })

  it('should generate from simple query with where numeric', () => {
    const source = 'SELECT user_name as username , id FROM users where id = 1 ;'
    const generator = new Generator([
      { id: 1, user_name: 'user1' },
      { id: 2, user_name: 'user2' },
    ])
    const results = generator.execute(source)
    expect(results).toEqual([{ username: 'user1', id: 1 }])
  })

  it('should generate from simple query with where numeric and group by', () => {
    const source =
      'SELECT user_name as username , id FROM users Group by user_name , id ;'
    const generator = new Generator([
      { id: 1, user_name: 'user1' },
      { id: 2, user_name: 'user2' },
    ])
    const results = generator.execute(source)
    generator.source
    expect(results).toEqual({
      '1': [{ id: 1, username: 'user1' }],
      '2': [{ id: 2, username: 'user2' }],
    })
  })

  it('should generate from simple query with order by', () => {
    const source =
      'SELECT user_name as username , id FROM users order by user_name , id ;'
    const generator = new Generator([
      { id: 2, user_name: 'user2' },
      { id: 1, user_name: 'user1' },
    ])
    const results = generator.execute(source)
    expect(results).toEqual([
      { id: 1, username: 'user1' },
      { id: 2, username: 'user2' },
    ])
  })

  it('should generate from simple query with limit', () => {
    const source =
      'SELECT user_name as username , id FROM users order by user_name , id limit 1 '
    const generator = new Generator([
      { id: 2, user_name: 'user2' },
      { id: 1, user_name: 'user1' },
    ])

    const tokens = generator.scan(source)

    const results = generator.execute(source)

    expect(results).toEqual([{ id: 1, username: 'user1' }])
  })

  // it('should generate from COUNT Query', () => {
  //   const source = 'SELECT count(id) as ids FROM users '
  //   const generator = new Generator([
  //     { id: 2, user_name: 'user2' },
  //     { id: 1, user_name: 'user1' },
  //   ])

  //   const tokens = generator.scan(source)

  //   const results = generator.execute(source)

  //   expect(results).toEqual([{ ids: 2 }])
  // })
})
