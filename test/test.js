var should    = require('chai').should();
var Selection = require('../src/selection');
var Bubble    = require('../src/bubble');

describe('Sort', function(){
  var unsorted = [22, 14, 85, 23, 1, 7, 9, 10, 36];
  var sorted   = [1, 7, 9, 10, 14, 22, 23, 36, 85];

  beforeEach(function(){
    unsorted = [22, 14, 85, 23, 1, 7, 9, 10, 36];
  })

  describe('selection sort', function(){
    it('should sort', function(){
      var selection = new Selection();
      var actual = selection.sort(unsorted);
      actual.should.to.eql(sorted);
    })
    it('should sort already sorted list', function(){
      var selection = new Selection();
      var actual = selection.sort(sorted);
      actual.should.to.eql(sorted);
    })
  })

  describe('bubble sort', function(){
    it('should sort', function(){
      var bubble = new Bubble();
      var actual = bubble.sort(unsorted);
      actual.should.to.eql(sorted);
    })
    it('should sort already sorted list', function(){
      var bubble = new Bubble();
      var actual = bubble.sort(sorted);
      actual.should.to.eql(sorted);
    })
  })
})
