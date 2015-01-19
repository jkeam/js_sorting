//Best case : nlogn
//Avg case  : nlogn
//Worst case: n^2, but very unlikely bc of the shuffle

//unstable sort, but in place
//can use more memory to make it stable, but normally not worth it.
module.exports = function() {

  //+ Jonas Raoni Soares Silva
  //@ http://jsfromhell.com/array/shuffle [v1.0]
  var shuffle = function (o){ 
      for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
  };

  //sort the elements in the list
  var recursiveSort = function(list, low, high) {
    //base case, list of size 1
    if (high <= low) {
      return list;
    }

    //divide
    var part = partition(list, low, high);
    list = part.list;
    var index = part.index;

    //conquer
    //sort left list
    list = recursiveSort(list, low, index);

    //sort right list
    list = recursiveSort(list, index+1, high);
    return list;
  }

  var swap = function(list, i, j) {
    var tmp = list[i];
    list[i] = list[j];
    list[j] = tmp;
    return list;
  }

  //pick the pivot, arbitrarily low, and find its final spot
  //then swap it to get it there and return that index
  var partition = function(list, low, high) {
    var i = low,
        j = high,
        processed = false;

    while (i < j) {
      processed = true;
      //time to find elements to swap:
      //first keep going we find an element thats bigger than our pivot
      while (list[low] >= list[i] && i < j && i <= high) {
        i++;
      }

      //then keep going right until we find an element thats smaller than our pivot
      //the less than equal to is critical so that we get the j element in the right place
      while (list[low] < list[j] && i <= j && j >= low) {
        j--;
      }

      //swap them, unless they've crossed
      if (i < j) {
        list = swap(list, i, j); 
      }
    }

    //swap k with pivot
    if (processed) {
      list = swap(list, low, j); 
    }

    return {
      index: j,
      list: list
    }
  }


  //track two pointers, moving them in and swapping 
  this.sort = function(unsorted) {
    var list = shuffle(unsorted);
    return recursiveSort(list, 0, unsorted.length -1); 
  }
}
