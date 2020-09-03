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

  var total = 0;
  for (let key in arrs){
    subarr = arrs[key]
    for(var i in subarr) { 
      total += subarr[i]; 
    }
  }
  return(total);
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  
  if (arr.length == 0) {
    return([])
  } else {
    first = arr[0]
    last = arr[arr.length-1]

    arr[0] = last
    arr[arr.length-1] = first

    return(arr)
  }
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  
  for (const key in haystack) {
    prop = `${haystack[key]}`

    new_prop = prop.toUpperCase()
    if (new_prop.includes(searchTerm.toUpperCase())){
      return(true)
    }
  }
  return(false)
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  
  function wordFreq(string) {
    var words = string.replace(/[.]/g, '').split(/\s/);
    var freqMap = {};
    words.forEach(function(w) {
        if (!freqMap[w]) {
            freqMap[w] = 0;
        }
        freqMap[w] += 1;
    });
    return freqMap;
  }
  new_str = str.replace(/[&\/\\#,+()$~%.'":*?!<>{}]/g, '');
  return(wordFreq(new_str.toLowerCase()));  
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
