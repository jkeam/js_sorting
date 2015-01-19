//Best case : nlogn, already sorted
//Avg case  : n^2
//Worst case: n^2, sorted desc
module.exports = function() {
  var memoStrideLengths = [];

  //Calculates the knuth increment and memoizes for use later.
  var calculateKnuthIncrements = function(k) {
    var inc = memoStrideLengths[k];
    if (!inc) {
      inc = (Math.pow(3, k) - 1) / 2;
      memoStrideLengths[k] = inc;
    }
    return inc;
  }

  //Keeps calculating knuth increments until we find the largest
  //  stride length thats less than the size of the list.
  //  During this, it memoizes the knuth increments for use later. 
  var findStride = function(listLength) {
    var strideLength = 1;
    var nextStrideLength = 1;
    var counter = 1;

    while (nextStrideLength < listLength) {
      strideLength = nextStrideLength;
      counter++;
      nextStrideLength = calculateKnuthIncrements(counter);
    }

    if (counter > 1) {
      counter--;
    }

    return counter;
  }

  var swap = function(list, i, j) {
    var tmp = list[i];
    list[i] = list[j];
    list[j] = tmp;
    return list;
  }

  //Loop to the end, only one pass
  // each element we run into, we immediately swap into its place
  this.sort = function(unsorted) {
    //find the stride index, precalculating all the knuth increments that we will use
    var strideIndex = findStride(unsorted.length);

    //loop over all the strides
    for (var i = strideIndex; i > 0; i--) {
      //get the knuth increment that we precalculated
      var inc = calculateKnuthIncrements(i);

      //take stride lengths through the list
      for (var j = 0; j < unsorted.length; j += inc) {

        //look backwards and swap smaller elements left
        for (var k = j; k > 0; k -= inc) {
          //if its smaller swap it backwards
          if (unsorted[k] < unsorted[k-inc]) {
            //swap
            unsorted = swap(unsorted, k, k-inc);
          }
        }
      }
    }
    return unsorted;
  }
}
