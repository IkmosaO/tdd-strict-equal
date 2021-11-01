const expect = require('chai').expect
const strictlyEqual = require('../function.js')
const describe = require('mocha').describe
const it = require('mocha').it


describe('strictlyEqual', () => {
  it('return true if values are strictlyequal', () => {
    // set up test data
    const firstValue = '5'
    const secondValue = '5'

    // call the function with the test data
    const result = strictlyEqual(firstValue, secondValue)

    // make assertions about what should be true
    expect(result).to.be.true
  })

  it('return true if values are strictlyequal', () => {
    // set up test data
    const firstValue = 'this is a string'
    const secondValue = 'this is a string'

    // call the function with the test data
    const result = strictlyEqual(firstValue, secondValue)

    // make assertions about what should be true
    expect(result).to.be.true
  })

  it('return true if values are not strictlyequal', () => {
    // set up test data
    const firstValue = 5
    const secondValue = 5

    // call the function with the test data
    const result = strictlyEqual(firstValue, secondValue)

    // make assertions about what should be true
    expect(result).to.be.true
  })

  it('return false if values are not strictlyequal', () => {
    // set up test data
    const firstValue = 'this is a string'
    const secondValue = 'this is not a string'

    // call the function with the test data
    const result = strictlyEqual(firstValue, secondValue)

    // make assertions about what should be false
    expect(result).to.be.false
  })

  it('return false if values are not strictlyequal', () => {
    // set up test data
    const firstValue = 'this is a string'
    const secondValue = '5'

    // call the function with the test data
    const result = strictlyEqual(firstValue, secondValue)

    // make assertions about what should be false
    expect(result).to.be.false
  })

  it('return false if values are not strictlyequal', () => {
    // set up test data
    const firstValue = '10'
    const secondValue = '6'

    // call the function with the test data
    const result = strictlyEqual(firstValue, secondValue)

    // make assertions about what should be false
    expect(result).to.be.false
  })
})
