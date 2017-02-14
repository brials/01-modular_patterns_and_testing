'use strict';

const greet = require('../lib/greet.js');
const assert = require('assert');

describe('Greet Module', function(){
  describe('#sayHello', function(){
    it('should return a string of hey name', function(){
      var result = greet.sayHello('brian');
      assert.ok(result === 'hey brian', 'the test did not return hey brian')
    })
  })
})
