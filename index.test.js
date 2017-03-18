const assert = require('assert')

it('assert output', () => {
  assert.equal(
    'This is the expected value',
    'This is the actual value',
    'assert.equal failed'
  )
})

