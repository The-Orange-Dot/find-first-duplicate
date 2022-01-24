function findFirstDuplicate(arr) {
  const unique = new Set(arr);

  console.log(unique);

  unique.forEach((setNum) => {
    if (arr.includes(setNum)) {
      arr.shift(setNum);
      unique.delete(setNum);
    } else {
      null;
    }
    console.log(arr);
  });

  return arr.length === 0 ? -1 : arr[0];
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));

  console.log("");

  console.log("Expecting: 8");
  console.log("=>", findFirstDuplicate([6, 2, 6, 8, 2, 8]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([9, 3, 5, 1, 0, 2]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution

//The new Set stores the Array's unique value first.

//When looping, we're using the array's first value to loop through the array and deleting the first value it finds.
//If there is only one value in the array, that value will no longer exist. It would also delete the same value from the Set too.

//It would continue this loop until there are no more unique values in the Array, and no more values in the Set, leaving only the duplicate values.

//After, the function uses a ternary statement to return a "-1" if there is nothing in the array (no unique values)
//but return the first value of the Array if there are any duplicates
