function insertionSort(arr) {
  //we will compare two values and put the smallest one to the left
  //then we compare third value to previous two values and accordingly put it
  //keep repeating till we hit arr.length-1

  for (let i = 0; i < arr.length - 1; i++) {
    let temp = null;
    let j = i + 1;
    while (j > 0) {
      if (arr[j] < arr[j - 1]) {
        temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
      j--;
    }
  }
  return arr;
}

console.log(
  insertionSort([-33, -1001, 0, 22, 43, 12, 22, 44, 3, Infinity, -Infinity])
);
