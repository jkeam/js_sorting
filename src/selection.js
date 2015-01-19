//Best case : n^2, already sorted, but no way to know
//Avg case  : n^2
//Worst case: n^2, sorted desc
module.exports = function() {

  //selection sort, loop and find lowest and put at beginning
  this.sort = function(unsorted) {
    var min      = 0,
        minIndex = 0;

    for (var i = 0; i < unsorted.length; i++) {
      //set item to compare
      min      = unsorted[i];
      minIndex = i;

      //loop through rest of array to find the next min
      for (var j = i + 1; j < unsorted.length; j++) {
        if (unsorted[j] < min) {
          minIndex = j;
          min = unsorted[j];
        }
      }

      //if we found a smaller element, switch it
      if (minIndex !== i) {
        var tmp = unsorted[i];
        unsorted[i] = min;
        unsorted[minIndex] = tmp;
      }
    }

    return unsorted;
  }
}
