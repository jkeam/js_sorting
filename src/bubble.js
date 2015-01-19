//Best case : n, b/c of optimized swapped check.  if no swaps, we are sorted
//Avg case  : n^2
//Worst case: If it's exactly opposite (desc), n^2
module.exports = function() {

  //largest value bubbles to the end
  this.sort = function(unsorted) {
    for (var i = 0; i < unsorted.length; i++) {
      var swapped = false;
      for (var j = i + 1; j < unsorted.length; j++) {
        //if i value is greater than j, switch it, and use j as comparison
        //that way big values get sorted to the end
        if (unsorted[i] > unsorted[j]) {
          var tmp = unsorted[j];
          unsorted[j] = unsorted[i];
          unsorted[i] = tmp;

          swapped = true;
        }
      }

      //if no swapped occurred, we are sorted
      if (!swapped) {
        return unsorted;
      }
    }
    return unsorted;
  }
}