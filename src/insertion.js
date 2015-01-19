//Best case : n^2, already sorted, but no way to know
//Avg case  : n^2
//Worst case: n^2, sorted desc
module.exports = function() {

  //Loop to the end, only one pass
  // each element we run into, we immediately swap into its place
  this.sort = function(unsorted) {
    for (var i = 1; i < unsorted.length; i++) {
      //while element is smaller, swap it left
      var cur = i;

      //keep cur valid and 
      //if cur value is smaller than the one to the left of it
      while (cur > 0 && unsorted[cur] < unsorted[cur - 1]) {
        //swap left
        var tmp = unsorted[cur];
        unsorted[cur] = unsorted[cur - 1];
        unsorted[cur - 1] = tmp;

        //move comparison left 
        cur -= 1;
      }
    }
    return unsorted;
  }
}
