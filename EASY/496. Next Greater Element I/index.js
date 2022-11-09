var nextGreaterElement = function (nums1, nums2) {
  const ans = [];

  for (let i of nums1) {
    let value = -1;

    for (let j = nums2.indexOf(i) + 1; j <= nums2.length - 1; j++) {
      if (nums2[j] > i) {
        value = nums2[j];
        break;
      }
    }

    ans.push(value);
  }
  return ans;
};

// console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));

console.log(
  nextGreaterElement([3, 1, 5, 7, 9, 2, 6], [1, 2, 3, 5, 6, 7, 9, 11]),
);
