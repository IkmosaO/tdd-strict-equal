const expect = require('chai').expect
const strictlyEqual = require('../function.js')
const describe = require('mocha').describe
const it = require('mocha').it


describe('strictlyEqual', () => {
  it('return true if values are strictlyequal', () => {
    const firstValue = '5'
    const secondValue = '5'

    const result = strictlyEqual(firstValue, secondValue)

    expect(result).to.be.true
  })

  it('return true if values are strictlyequal', () => {
    const firstValue = 'this is a string'
    const secondValue = 'this is a string'

    const result = strictlyEqual(firstValue, secondValue)

    expect(result).to.be.true
  })

  it('return true if values are not strictlyequal', () => {
    const firstValue = 5
    const secondValue = 5

    const result = strictlyEqual(firstValue, secondValue)

    expect(result).to.be.true
  })

  it('return false if values are not strictlyequal', () => {
    const firstValue = 'this is a string'
    const secondValue = 'this is not a string'

    const result = strictlyEqual(firstValue, secondValue)

    expect(result).to.be.false
  })

  it('return false if values are not strictlyequal', () => {
    const firstValue = 'this is a string'
    const secondValue = '5'

    const result = strictlyEqual(firstValue, secondValue)

    expect(result).to.be.false
  })

  it('return false if values are not strictlyequal', () => {
    const firstValue = '10'
    const secondValue = '6'

    const result = strictlyEqual(firstValue, secondValue)

    expect(result).to.be.false
  })
})
