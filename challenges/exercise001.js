function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.substr(0, 1).toUpperCase() + word.substr(1, word.length);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.substr(0, 1) + "." + lastName.substr(0, 1);
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  return (Math.round(originalPrice * (100 + vatRate)) /100);
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  return (Math.round((originalPrice - (originalPrice * reduction / 100))*100) /100);
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");

  function extractMiddle(str) {
    var position;
    var length;

    if(str.length % 2 == 1) {
        position = str.length / 2;
        length = 1;
    } else {
        position = str.length / 2 - 1;
        length = 2;
    }
    return str.substring(position, position + length)
  }
  return(extractMiddle(str));
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  
  function reverseString(str) {
    return str.split("").reverse().join("");
  }
  return(reverseString(word));
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");

  function myFunction(value, index, array) {
    return value.split("").reverse().join("");
  }
  return(words.map(myFunction));
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");

  var count = 0;
  for (let key in users){
    if (users[key].type == "Linux") {
      count = count + 1
    }
  }
  return(count);
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  
  var count = 0;
  var tot = 0;
  for (let key in scores){
    count = count + scores[key]
    tot = tot + 1
  }

  return(Math.round((count/tot)*100) /100);
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");

  if ((n % 3 == 0) && (n % 5 == 0)){
    return("fizzbuzz")
  } else if (n % 3 == 0){
    return("fizz")
  } else if (n % 5 == 0){
      return("buzz")
  } else {
    return(n)
  }
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
