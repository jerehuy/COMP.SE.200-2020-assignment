import filter from '../src/filter.js'

describe('documentation examples', () => {
    const users = [
        { 'user': 'barney', 'active': true},
        { 'user': 'fred', 'active': false}
    ]

    test('documentation example 1', () => {
        expect( filter(users, ( active))).toMatchObject(users['barney']);
    })
})