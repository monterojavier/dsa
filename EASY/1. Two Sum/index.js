// BRUTE FORCE
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    const findNum = target - nums[i];
    const index = nums.indexOf(findNum, i + 1);
    if (index !== -1) {
      return [i, index];
    }
  }
};

// Input: (nums = [2, 7, 11, 15]), (target = 9);
// Output: [0, 1];
console.log('EXAMPLE 1:', twoSum([2, 7, 11, 15], 9));

// Input: (nums = [3, 2, 4]), (target = 6);
// Output: [1, 2];
console.log('EXAMPLE 2', twoSum([3, 2, 4], 6));
