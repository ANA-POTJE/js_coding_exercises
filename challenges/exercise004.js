function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  
  arr_small = [];
  newkey = 0
  for (let key in nums){
    if (nums[key] < 1){
      arr_small[newkey] = nums[key];
      newkey = newkey + 1
    }
  }
  return(arr_small)
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  
  new_arr = [];
  newkey = 0
  for (let key in names){
    if (names[key].startsWith(char)){
      new_arr[newkey] = names[key];
      newkey = newkey + 1
    }
  }
  return(new_arr);
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  
  new_arr = [];
  newkey = 0
  for (let key in words){
    if (words[key].startsWith("to ")){
      new_arr[newkey] = words[key];
      newkey = newkey + 1
    }
  }
  return(new_arr);
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");

  new_arr = [];
  newkey = 0
  for (let key in nums){
    if (Number.isInteger(nums[key])){
      new_arr[newkey] = nums[key];
      newkey = newkey + 1
    }
  }
  return(new_arr);
}

function getCities(users) {
  if (!users) throw new Error("users is required");

  new_arr = [];
  for (let key in users){
    new_arr[key] = users[key].data.city.displayName
  }
  return(new_arr);
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
