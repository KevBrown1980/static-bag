const Bag = require('./Bag')

describe('Bag class', () => {
    //bag has weight
    test('bag has weight', () => {
        const bag = new Bag(20)
        expect(bag.weight).toBe(20)
    })
    //if bag has no weight, return error
    test('bag has no weight to return an error', () => {
        expect(() => new Bag()).toThrowError('bag needs weight')
    })

    //if bag is too heavy - i.e weight over 23
    test('bag is over  23 kg', () => {
        const bag1 = new Bag(26)
        //expect(bag1.isOverWeight()).toBe(26)
        expect(() => new Bag()).toThrowError('bag too heavy')
    })

     //if bag is under max weight of 23
    test('bag is under  23 kg', () => {
        const bag2 = new Bag(18)
        expect(bag2.weight).toBe(18)
    })
  

})