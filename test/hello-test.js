const assert = require('assert')

const sum = require('../hello')

describe('#hello.js', () => {
    describe('#sum()', () => {
        before(() => {
            console.log('before')
        })

        beforeEach(() => {
            console.log('beforeEach')
        })


        it('sum() should return 0', () => {
            assert.strictEqual(sum(), 0)
        })

        it('sum() should return 1', () => {
            assert.strictEqual(sum(1), 1)
        })

        it('sum() should return 3', () => {
            assert.strictEqual(sum(1,2), 3)
        })
    })
})