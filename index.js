
function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++){
    const targetSum = target - array [i];

   for (let k = i + 1; k < array.length; k++){
    if (array [k] === targetSum) return true;

  } 

  }
   return false; 
}

/* 
  Write the Big O time complexity of your function here
  time complexity = O(n*2)
*/

/* 
  Add your pseudocode here
   for (let i = 0; i < array.length; i++){
    const targetSum = target - array [i];
   for (let k = i + 1; k < array.length; k++){
    if (array [k] === targetSum) return true;
  } 
  }
   return false; 
}
*/

/*
  Add written explanation of your solution here
  We'll let our target minus the arrays provided and check whether the result can complement our array when added to provide the target
  Our initializer will be targetSum (target - array[i])
  We'll use the following approach to check whether the targetSum can be added to the array
  If targetSum can be added to the array, then we'll return true
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 2, 3, 3], 4));
}

module.exports = hasTargetSum;