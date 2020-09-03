const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");

  for (var i=0; i<nums.length; i++) {
    if ((nums[i] == n) && (i<nums.length-1)){
      return(nums[i+1])
    }
  }
  return(null)
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  
  function count(str) {
    var sum = 0;
    for (var i = 0, length = str.length; i < length; i++) {
      sum += Number(str[i]);
    }
    return {
      0: str.length - sum,
      1: sum
    };
  }
  return(count(str))
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  
  function reverseNumber(num){
    return Number(String(num).split("").reverse().join(""))
  }
  return(reverseNumber(n))
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
