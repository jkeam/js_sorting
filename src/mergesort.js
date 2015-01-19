//Best case : nlogn
//Avg case  : nlogn
//Worst case: n

//log n lists b/c we chop into halves.
//n to traverse the lists and put back into order.

//awesome sort except for memory usage.
module.exports = function() {

  //rebuild two lists into result list
  //build by picking the less from each list
  var merge = function(left, right) {
    var result = [];
    var leftSize  = left.length,
        rightSize = right.length;

    var i = 0,
        j = 0;

    while (i < leftSize && j < rightSize) {
      if (left[i] <= right[j]) {
        result.push(left[i++]);
      } else {
        result.push(right[j++]);
      }
    }

    while (i < leftSize) {
      result.push(left[i++]);
    }

    while (j < rightSize) {
      result.push(right[j++]);
    }

    return result;
  }

  //top down, standard implementation
  this.sort = function(unsorted) {
    if (unsorted.length <= 1) {
      return unsorted;
    }

    //divide
    var middle = unsorted.length / 2;
    var left   = unsorted.slice(0, middle);
    var right  = unsorted.slice(middle, unsorted.length);

    //sort each sublist
    left  = this.sort(left);
    right = this.sort(right);

    //conquer, remerge sorted list
    return merge(left, right);
  }
}
