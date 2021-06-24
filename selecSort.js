function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minimum = i;
    let temp = null;
    swap = false;
    for (let j = i + 1; j < arr.length; j++) {
      //in this loop we just figure out which one is the minimum value(index)
      if (arr[j] < arr[minimum]) {
        minimum = j;
        swap = true;
      }
    }
    //here we will swap
    if (swap) {
      temp = arr[minimum];
      arr[minimum] = arr[i];
      arr[i] = temp;
    }
  }

  return arr;
}

console.log(selectionSort([-1, -4, 4, 5, 10, 100, 0]));
