//Theory

/*Create two Functions

1. merge -> this will basically get two arrays and will return a result array.
The resulting array would be calculated with following logic
Compare first element of 1 array to another. Which ever is small, push it in
Push the remaining elements of other array also(in case the lengths are not equal)

2. Splitting -> This will basically create two indivial arrays using recursion.
*/

//Lets create the first function

function mergeArrays(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    //if any of them exhausts we break out of the loop
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j]) {
      results.push(arr2[j]);
      j++;
    }
  }

  //to push the left out cases
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

//Second part i.e to create two split arrays
function splitter(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);

  let left = splitter(arr.slice(0, mid));
  let right = splitter(arr.slice(mid));

  //finally when we have the returned value
  // we will use our step 1 and pass those two values
  return mergeArrays(left, right);
}

console.log(splitter([-1, -17, 0, 111, 200, -400, 55]));
