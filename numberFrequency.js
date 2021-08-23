const numberFrequency = (nums) => {
  let identicalA = [...new Set(nums)];
  let flag = 0;
  let res = [];
  for (let i = 0; i < identicalA.length; i++) {
    flag = 0;
    for (let j = 0; j < nums.length; j++) {
      if (identicalA[i] === nums[j]) {
        ++flag;
      }
    }
    res.push({
      num: identicalA[i],
      freq: flag,
    });
  }
  return res;
};

console.log([1, 1, 2, 2, 3, 4, 4, 4]);
console.log(numberFrequency([1, 1, 2, 2, 3, 4, 4, 4]));
