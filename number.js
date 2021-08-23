const removeDuplicates = (nums) => {
  return [...new Set(nums)];
};

console.log([1, 1, 2]);
console.log(removeDuplicates([1, 1, 2]));
